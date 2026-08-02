import React from 'react'
import Icon from '../components/Icon'

import reportsIcon from '../assets/icons/reports/file-chart-column.svg'

const Reports = () => {
  return (
    <div className="reports">
      <div className="page-header">
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-subtitle">This page is being rebuilt.</p>
        </div>
      </div>

      <div className="card wip-card">
        <div className="wip-icon">
          <Icon src={reportsIcon} alt="Reports" size={34} />
        </div>
        <div className="wip-body">
          <div className="wip-title">Under construction</div>
          <div className="wip-text">
            Charts, exports, and printable formats will be reworked here.
          </div>
        </div>
      </div>

      <style>{`
        .reports {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 6px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .wip-card {
          display: flex;
          align-items: center;
          gap: 14px;
          max-width: 820px;
        }

        .wip-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: #e0e7ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        .wip-body {
          min-width: 0;
        }

        .wip-title {
          font-size: 16px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 4px;
        }

        .wip-text {
          font-size: 13px;
          color: #4b5563;
          line-height: 1.35;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 24px;
          }

          .wip-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default Reports
