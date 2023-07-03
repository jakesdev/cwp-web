import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Component, OnInit } from '@angular/core';
import { AdminService, LoaderService } from '@cwp/core/services';
import { Chart, registerables } from 'chart.js';
import { STAT_CARD } from './analytic-data';

@Component({
  selector: 'cwp-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  cardMockData = STAT_CARD;

  usersByMonth: {
    month: string;
    count: number;
  }[] = [];

  transactionsByMonth: {
    month: string;
    count: number;
  }[] = [];
  dataStatCard = {
    userCount: 0,
    customerSupportCount: 0,
    transactionCount: 0,
    pageCount: 0
  };

  constructor(
    private readonly adminService: AdminService,

    private readonly loaderService: LoaderService
  ) {}

  ngOnInit() {
    registerLocaleData(es);
    this.adminService.getStatCard().subscribe((res: any) => {
      this.dataStatCard = res.data;
    });

    Chart.register(...registerables);
    this.renderLineChart();
    this.renderBarChart();
    this.renderPieChart();
  }

  renderLineChart() {
    this.adminService.getUsersByMonth().subscribe((res: any) => {
      this.usersByMonth = res.data;
      const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'User Created By Month',
            data: this.usersByMonth.map((item) => item.count),
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
    });
  }

  renderBarChart() {
    this.adminService.getTransactionByMonth().subscribe((res: any) => {
      this.transactionsByMonth = res.data;
      const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Total Purchase',
            data: this.transactionsByMonth.map((item) => item.count),
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

  checkLoading() {
    if (this.dataStatCard.userCount == 0 && this.dataStatCard.customerSupportCount == 0 && this.dataStatCard.transactionCount == 0 && this.dataStatCard.pageCount == 0
      && this.usersByMonth.length == 0
    ) {
      return true;
    }
    else {
      return this.loaderService.loading$.next(false);
    }
  }

}
