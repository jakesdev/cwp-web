import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { STAT_CARD } from './analytic-data';

@Component({
  selector: 'cwp-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  cardMockData = STAT_CARD;

  ngOnInit() {
    Chart.register(...registerables);

    this.renderLineChart();
    this.renderBarChart();
    this.renderPieChart();
  }

  renderLineChart() {
    const lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'User Activity',
          data: [34, 43, 20, 37, 56, 60, 49, 73, 65, 70, 82, 74],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    };

    const lineChartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    new Chart('lineChart', {
      type: 'line',
      data: lineChartData,
      options: lineChartOptions,
    });
  }

  renderBarChart() {
    const barChartData = {
      labels: ['Pricing Sections', 'Dialog Sections', 'About Us Sections', ' Newsletter Sections', 'Testimonials', '  Blog Sections'],
      datasets: [
        {
          label: 'Total Purchase',
          data: [50, 30, 70, 45, 54, 64],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
      ],
    };

    const barChartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    new Chart('barChart', {
      type: 'bar',
      data: barChartData,
      options: barChartOptions,
    });

  }

  renderPieChart() {
    const pieChartData = {
      labels: ['Individual', 'Startup', 'Enterprise'],
      datasets: [
        {
          data: [57, 23, 20],
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        },
      ],
    };

    const pieChartOptions = {
      responsive: true,
    };

    new Chart('pieChart', {
      type: 'pie',
      data: pieChartData,
      options: pieChartOptions,
    });
  }

}
