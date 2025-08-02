import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as Papa from 'papaparse';

// Extend jsPDF type to include autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export interface ExportData {
  id: number;
  campaign: string;
  channel: string;
  impressions: number;
  clicks: number;
  ctr: number;
  conversions: number;
  revenue: number;
  status: string;
}

export const exportToCSV = (data: ExportData[], filename: string = 'campaign-data') => {
  const csv = Papa.unparse(data, {
    header: true,
    columns: [
      'id',
      'campaign', 
      'channel',
      'impressions',
      'clicks',
      'ctr',
      'conversions',
      'revenue',
      'status'
    ]
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const exportToPDF = (data: ExportData[], filename: string = 'campaign-report') => {
  try {
    const doc = new jsPDF();
  
  // Add header
  doc.setFontSize(20);
  doc.setTextColor(55, 102, 255); // Primary blue color
  doc.text('ADmyBRAND Insights', 20, 20);
  
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Campaign Performance Report', 20, 35);
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 45);

  // Prepare table data
  const tableColumns = [
    'Campaign',
    'Channel', 
    'Impressions',
    'Clicks',
    'CTR %',
    'Conversions',
    'Revenue ($)',
    'Status'
  ];

  const tableData = data.map(row => [
    row.campaign,
    row.channel,
    row.impressions.toLocaleString(),
    row.clicks.toLocaleString(),
    `${row.ctr}%`,
    row.conversions.toString(),
    `$${row.revenue.toLocaleString()}`,
    row.status
  ]);

  // Add table
  doc.autoTable({
    head: [tableColumns],
    body: tableData,
    startY: 55,
    theme: 'grid',
    headStyles: {
      fillColor: [55, 102, 255], // Primary blue
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252] // Light gray
    },
    styles: {
      fontSize: 8,
      cellPadding: 3
    },
    columnStyles: {
      2: { halign: 'right' }, // Impressions
      3: { halign: 'right' }, // Clicks
      4: { halign: 'right' }, // CTR
      5: { halign: 'right' }, // Conversions
      6: { halign: 'right' }, // Revenue
    }
  });

  // Add summary section
  const totalRevenue = data.reduce((sum, row) => sum + row.revenue, 0);
  const totalConversions = data.reduce((sum, row) => sum + row.conversions, 0);
  const totalClicks = data.reduce((sum, row) => sum + row.clicks, 0);
  const totalImpressions = data.reduce((sum, row) => sum + row.impressions, 0);
  const avgCTR = ((totalClicks / totalImpressions) * 100).toFixed(2);

  const finalY = (doc as any).lastAutoTable.finalY || 150;
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Summary', 20, finalY + 20);
  
  doc.setFontSize(10);
  doc.text(`Total Revenue: $${totalRevenue.toLocaleString()}`, 20, finalY + 35);
  doc.text(`Total Conversions: ${totalConversions.toLocaleString()}`, 20, finalY + 45);
  doc.text(`Total Clicks: ${totalClicks.toLocaleString()}`, 20, finalY + 55);
  doc.text(`Total Impressions: ${totalImpressions.toLocaleString()}`, 20, finalY + 65);
  doc.text(`Average CTR: ${avgCTR}%`, 20, finalY + 75);

    // Save the PDF
    doc.save(`${filename}.pdf`);
  } catch (error) {
    console.error('PDF Export Error:', error);
    throw new Error('Failed to generate PDF report');
  }
};