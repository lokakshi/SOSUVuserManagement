import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import './Export.css'
import React from 'react'

const Export = () => {
    function exportToExcel() {
        // Generate dummy data
        const data = [
          ['Date', 'Day of the week', 'Jira/Ticket # (if any)','Brief Discription of the Work','Story Points (1SP=1 man hour)','Expected Completion Date','Actual Completion Date'],
          ['18/01/2023', 'Wednesday', 'Greenlight <> Report 07 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['19/01/2023', 'Thursday', 'Greenlight <> Report 08 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['20/01/2023', 'Friday', 'Greenlight <> Report 09 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['21/01/2023', 'Saturday', 'Greenlight <> Report 10 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['22/01/2023', 'Monday', 'Greenlight <> Report 11 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['23/01/2023', 'Tuesday', 'Greenlight <> Report 12 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['24/01/2023', 'Wednesday', 'Greenlight <> Report 13 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['25/01/2023', 'Thursday', 'Greenlight <> Report 14 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['26/01/2023', 'Friday', 'Greenlight <> Report 15 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['27/01/2023', 'Monday', 'Greenlight <> Report 07 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['27/01/2023', 'Tuesday', 'Greenlight <> Report 07 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['27/01/2023', 'Wednesday', 'Greenlight <> Report 07 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['27/01/2023', 'Thursday', 'Greenlight <> Report 07 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023'],
          ['27/01/2023', 'Friday', 'Greenlight <> Report 07 - Recon','See specs. You can rerun from GREENLIGHT_FIX. Go to Actions > Reports > R7_ReconReport. If you want to see a day that has a Traded amount, that would be 1/9/23. Also, if you want to add your email addresses or make a new report it’s under the Report List of ReportConfig_Reports:','2','25/01/2023','20/10/2023']
        ]
      
       // Create a new workbook
       const wb = XLSX.utils.book_new();
       
       // Add the data to the workbook
       const ws = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        
        // Save the workbook to an Excel file
        const file = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { type: 'application/octet-stream' });
        saveAs(file, 'dummy-data.xlsx');
      }
  return (
    <div>
        <button onClick={exportToExcel}>Export</button>
    </div>
  )
}

export default Export



