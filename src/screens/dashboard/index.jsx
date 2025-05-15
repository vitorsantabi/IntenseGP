"use client"

import { useState } from "react"
import { Menu, Play, Accessibility, Bell, Mail, BarChart2, FileText, Users, Clipboard, Award } from "lucide-react"
import './dashboard.css'

function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <header className="navbar">
        <div className="navbar-left">
          <div className="logo">
         <img src="../../assets/logo.png" alt="" />
            <div className="logo-underline"></div>
          </div>
          <button className="menu-toggle" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>
        <div className="navbar-right">
          <button className="nav-icon">
            <Play size={20} />
          </button>
          <button className="nav-icon">
            <Accessibility size={20} />
          </button>
          <button className="nav-icon">
            <Bell size={20} />
          </button>
          <button className="nav-icon">
            <Mail size={20} />
          </button>
        </div>
      </header>

      {/* Vertical Sidebar */}
      <aside className={`sidebar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-icons">
          <a href="#" className="sidebar-icon active">
            <BarChart2 size={24} />
          </a>
          <a href="#" className="sidebar-icon">
            <FileText size={24} />
          </a>
          <a href="#" className="sidebar-icon">
            <Users size={24} />
          </a>
          <a href="#" className="sidebar-icon">
            <Clipboard size={24} />
          </a>
          <a href="#" className="sidebar-icon">
            <Award size={24} />
          </a>
        </div>
      </aside>

      {/* Main Content Area with Background Image */}
      <main className="main-content">
        <div className="content-overlay">
          <div className="content-container">
            <h1>Welcome to EOA Dashboard</h1>
            <p>Access all your business tools and analytics in one place</p>

            <div className="dashboard-cards">
              <div className="card">
                <h3>Business Analytics</h3>
                <p>View your company's performance metrics and KPIs</p>
                <button className="card-button">View Analytics</button>
              </div>

              <div className="card">
                <h3>Team Management</h3>
                <p>Manage your team members and their assignments</p>
                <button className="card-button">Manage Team</button>
              </div>

              <div className="card">
                <h3>Project Status</h3>
                <p>Track the progress of your ongoing projects</p>
                <button className="card-button">View Projects</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
