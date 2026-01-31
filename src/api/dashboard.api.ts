import type { 
  BarChartData, 
  LineChartData, 
  QueriesBySourceData,
  DateRange
} from '../types/dashboard.types.ts'

interface TimeSeriesPoint {
  date: string;
  value: number;
}

interface QueriesBySourceTimeSeriesPoint {
  date: string;
  sources: Array<{ source: string; count: number }>;
}

interface UsersTimeSeriesPoint {
  date: string;
  total: number;
  active: number;
  inactive: number;
}

interface MockChartData {
  summary?: number;
  timeSeries?: TimeSeriesPoint[];
  sources?: Array<{ source: string; count: number }>;
  queriesBySourceTimeSeries?: QueriesBySourceTimeSeriesPoint[];
}

interface MockDashboardData {
  users: {
    total: number;
    active: number;
    inactive: number;
    timeSeries?: UsersTimeSeriesPoint[];
  };
  uniqueLogins: MockChartData;
  queriesExecuted: MockChartData;
  queriesBySource: MockChartData;
  avgResponseTimeWorkflow: MockChartData;
  firewallApiCalls: MockChartData;
  avgResponseTimeFirewall: MockChartData;
}

    // Mock data matching the dashboard image (Layer 1 - raw API data)
const mockDashboardData: MockDashboardData = {
  users: {
    total: 577,
    active: 543,
    inactive: 34,
    timeSeries: [
      // Generate time series data - users grow over time
      // Oct 14 - Nov 13: Early period (lower user counts)
      { date: '2025-10-14', total: 420, active: 395, inactive: 25 },
      { date: '2025-10-15', total: 425, active: 400, inactive: 25 },
      { date: '2025-10-16', total: 430, active: 405, inactive: 25 },
      { date: '2025-10-17', total: 435, active: 410, inactive: 25 },
      { date: '2025-10-18', total: 440, active: 415, inactive: 25 },
      { date: '2025-10-19', total: 445, active: 420, inactive: 25 },
      { date: '2025-10-20', total: 450, active: 425, inactive: 25 },
      { date: '2025-10-21', total: 455, active: 430, inactive: 25 },
      { date: '2025-10-22', total: 460, active: 435, inactive: 25 },
      { date: '2025-10-23', total: 465, active: 440, inactive: 25 },
      { date: '2025-10-24', total: 470, active: 445, inactive: 25 },
      { date: '2025-10-25', total: 475, active: 450, inactive: 25 },
      { date: '2025-10-26', total: 480, active: 455, inactive: 25 },
      { date: '2025-10-27', total: 485, active: 460, inactive: 25 },
      { date: '2025-10-28', total: 490, active: 465, inactive: 25 },
      { date: '2025-10-29', total: 495, active: 470, inactive: 25 },
      { date: '2025-10-30', total: 500, active: 475, inactive: 25 },
      { date: '2025-10-31', total: 505, active: 480, inactive: 25 },
      { date: '2025-11-01', total: 510, active: 485, inactive: 25 },
      { date: '2025-11-02', total: 515, active: 490, inactive: 25 },
      { date: '2025-11-03', total: 520, active: 495, inactive: 25 },
      { date: '2025-11-04', total: 525, active: 500, inactive: 25 },
      { date: '2025-11-05', total: 530, active: 505, inactive: 25 },
      { date: '2025-11-06', total: 535, active: 510, inactive: 25 },
      { date: '2025-11-07', total: 540, active: 515, inactive: 25 },
      { date: '2025-11-08', total: 545, active: 520, inactive: 25 },
      { date: '2025-11-09', total: 550, active: 525, inactive: 25 },
      { date: '2025-11-10', total: 555, active: 530, inactive: 25 },
      { date: '2025-11-11', total: 560, active: 535, inactive: 25 },
      { date: '2025-11-12', total: 565, active: 540, inactive: 25 },
      { date: '2025-11-13', total: 570, active: 545, inactive: 25 },
      // Nov 14 - Dec 13: Growing period
      { date: '2025-11-14', total: 575, active: 550, inactive: 25 },
      { date: '2025-11-15', total: 580, active: 555, inactive: 25 },
      { date: '2025-11-16', total: 585, active: 560, inactive: 25 },
      { date: '2025-11-17', total: 590, active: 565, inactive: 25 },
      { date: '2025-11-18', total: 595, active: 570, inactive: 25 },
      { date: '2025-11-19', total: 600, active: 575, inactive: 25 },
      { date: '2025-11-20', total: 605, active: 580, inactive: 25 },
      { date: '2025-11-21', total: 610, active: 585, inactive: 25 },
      { date: '2025-11-22', total: 615, active: 590, inactive: 25 },
      { date: '2025-11-23', total: 620, active: 595, inactive: 25 },
      { date: '2025-11-24', total: 625, active: 600, inactive: 25 },
      { date: '2025-11-25', total: 630, active: 605, inactive: 25 },
      { date: '2025-11-26', total: 635, active: 610, inactive: 25 },
      { date: '2025-11-27', total: 640, active: 615, inactive: 25 },
      { date: '2025-11-28', total: 645, active: 620, inactive: 25 },
      { date: '2025-11-29', total: 650, active: 625, inactive: 25 },
      { date: '2025-11-30', total: 655, active: 630, inactive: 25 },
      { date: '2025-12-01', total: 660, active: 635, inactive: 25 },
      { date: '2025-12-02', total: 665, active: 640, inactive: 25 },
      { date: '2025-12-03', total: 670, active: 645, inactive: 25 },
      { date: '2025-12-04', total: 675, active: 650, inactive: 25 },
      { date: '2025-12-05', total: 680, active: 655, inactive: 25 },
      { date: '2025-12-06', total: 685, active: 660, inactive: 25 },
      { date: '2025-12-07', total: 690, active: 665, inactive: 25 },
      { date: '2025-12-08', total: 695, active: 670, inactive: 25 },
      { date: '2025-12-09', total: 700, active: 675, inactive: 25 },
      { date: '2025-12-10', total: 705, active: 680, inactive: 25 },
      { date: '2025-12-11', total: 710, active: 685, inactive: 25 },
      { date: '2025-12-12', total: 715, active: 690, inactive: 25 },
      { date: '2025-12-13', total: 720, active: 695, inactive: 25 },
      // Dec 14 - Jan 13: Approaching current values
      { date: '2025-12-14', total: 725, active: 700, inactive: 25 },
      { date: '2025-12-15', total: 730, active: 705, inactive: 25 },
      { date: '2025-12-16', total: 735, active: 710, inactive: 25 },
      { date: '2025-12-17', total: 740, active: 715, inactive: 25 },
      { date: '2025-12-18', total: 745, active: 720, inactive: 25 },
      { date: '2025-12-19', total: 750, active: 725, inactive: 25 },
      { date: '2025-12-20', total: 755, active: 730, inactive: 25 },
      { date: '2025-12-21', total: 760, active: 735, inactive: 25 },
      { date: '2025-12-22', total: 765, active: 740, inactive: 25 },
      { date: '2025-12-23', total: 770, active: 745, inactive: 25 },
      { date: '2025-12-24', total: 775, active: 750, inactive: 25 },
      { date: '2025-12-25', total: 780, active: 755, inactive: 25 },
      { date: '2025-12-26', total: 785, active: 760, inactive: 25 },
      { date: '2025-12-27', total: 790, active: 765, inactive: 25 },
      { date: '2025-12-28', total: 795, active: 770, inactive: 25 },
      { date: '2025-12-29', total: 800, active: 775, inactive: 25 },
      { date: '2025-12-30', total: 805, active: 780, inactive: 25 },
      { date: '2025-12-31', total: 810, active: 785, inactive: 25 },
      { date: '2026-01-01', total: 815, active: 790, inactive: 25 },
      { date: '2026-01-02', total: 820, active: 795, inactive: 25 },
      { date: '2026-01-03', total: 825, active: 800, inactive: 25 },
      { date: '2026-01-04', total: 830, active: 805, inactive: 25 },
      { date: '2026-01-05', total: 835, active: 810, inactive: 25 },
      { date: '2026-01-06', total: 840, active: 815, inactive: 25 },
      { date: '2026-01-07', total: 845, active: 820, inactive: 25 },
      { date: '2026-01-08', total: 850, active: 825, inactive: 25 },
      { date: '2026-01-09', total: 855, active: 830, inactive: 25 },
      { date: '2026-01-10', total: 860, active: 835, inactive: 25 },
      { date: '2026-01-11', total: 865, active: 840, inactive: 25 },
      { date: '2026-01-12', total: 870, active: 845, inactive: 25 },
      { date: '2026-01-13', total: 875, active: 870, inactive: 5 },
      // Jan 14 onwards: Current period (stabilized around 577 total)
      { date: '2026-01-14', total: 550, active: 520, inactive: 30 },
      { date: '2026-01-15', total: 555, active: 525, inactive: 30 },
      { date: '2026-01-16', total: 560, active: 530, inactive: 30 },
      { date: '2026-01-17', total: 565, active: 535, inactive: 30 },
      { date: '2026-01-18', total: 570, active: 540, inactive: 30 },
      { date: '2026-01-19', total: 575, active: 545, inactive: 30 },
      { date: '2026-01-20', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-21', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-22', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-23', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-24', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-25', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-26', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-27', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-28', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-29', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-30', total: 577, active: 543, inactive: 34 },
      { date: '2026-01-31', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-01', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-02', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-03', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-04', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-05', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-06', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-07', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-08', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-09', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-10', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-11', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-12', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-13', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-14', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-15', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-16', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-17', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-18', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-19', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-20', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-21', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-22', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-23', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-24', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-25', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-26', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-27', total: 577, active: 543, inactive: 34 },
      { date: '2026-02-28', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-01', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-02', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-03', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-04', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-05', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-06', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-07', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-08', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-09', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-10', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-11', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-12', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-13', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-14', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-15', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-16', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-17', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-18', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-19', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-20', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-21', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-22', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-23', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-24', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-25', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-26', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-27', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-28', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-29', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-30', total: 577, active: 543, inactive: 34 },
      { date: '2026-03-31', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-01', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-02', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-03', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-04', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-05', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-06', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-07', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-08', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-09', total: 577, active: 543, inactive: 34 },
      { date: '2026-04-10', total: 577, active: 543, inactive: 34 }
    ]
  },
  uniqueLogins: {
    summary: 374,
    timeSeries: [
      // Oct 14 - Nov 13: Early period (lower baseline, 1-4 range)
      { date: '2025-10-14', value: 2 },
      { date: '2025-10-15', value: 3 },
      { date: '2025-10-16', value: 1 },
      { date: '2025-10-17', value: 2 },
      { date: '2025-10-18', value: 4 },
      { date: '2025-10-19', value: 3 },
      { date: '2025-10-20', value: 2 },
      { date: '2025-10-21', value: 1 },
      { date: '2025-10-22', value: 3 },
      { date: '2025-10-23', value: 2 },
      { date: '2025-10-24', value: 4 },
      { date: '2025-10-25', value: 3 },
      { date: '2025-10-26', value: 2 },
      { date: '2025-10-27', value: 1 },
      { date: '2025-10-28', value: 3 },
      { date: '2025-10-29', value: 2 },
      { date: '2025-10-30', value: 4 },
      { date: '2025-10-31', value: 3 },
      { date: '2025-11-01', value: 2 },
      { date: '2025-11-02', value: 1 },
      { date: '2025-11-03', value: 3 },
      { date: '2025-11-04', value: 2 },
      { date: '2025-11-05', value: 4 },
      { date: '2025-11-06', value: 3 },
      { date: '2025-11-07', value: 2 },
      { date: '2025-11-08', value: 1 },
      { date: '2025-11-09', value: 3 },
      { date: '2025-11-10', value: 2 },
      { date: '2025-11-11', value: 4 },
      { date: '2025-11-12', value: 3 },
      { date: '2025-11-13', value: 2 },
      // Nov 14 - Dec 13: Growing period (2-5 range)
      { date: '2025-11-14', value: 3 },
      { date: '2025-11-15', value: 4 },
      { date: '2025-11-16', value: 2 },
      { date: '2025-11-17', value: 3 },
      { date: '2025-11-18', value: 5 },
      { date: '2025-11-19', value: 4 },
      { date: '2025-11-20', value: 3 },
      { date: '2025-11-21', value: 2 },
      { date: '2025-11-22', value: 4 },
      { date: '2025-11-23', value: 3 },
      { date: '2025-11-24', value: 5 },
      { date: '2025-11-25', value: 4 },
      { date: '2025-11-26', value: 3 },
      { date: '2025-11-27', value: 2 },
      { date: '2025-11-28', value: 4 },
      { date: '2025-11-29', value: 3 },
      { date: '2025-11-30', value: 5 },
      { date: '2025-12-01', value: 4 },
      { date: '2025-12-02', value: 3 },
      { date: '2025-12-03', value: 2 },
      { date: '2025-12-04', value: 4 },
      { date: '2025-12-05', value: 3 },
      { date: '2025-12-06', value: 5 },
      { date: '2025-12-07', value: 4 },
      { date: '2025-12-08', value: 3 },
      { date: '2025-12-09', value: 2 },
      { date: '2025-12-10', value: 4 },
      { date: '2025-12-11', value: 3 },
      { date: '2025-12-12', value: 5 },
      { date: '2025-12-13', value: 4 },
      // Dec 14 - Jan 13: Approaching baseline (3-6 range)
      { date: '2025-12-14', value: 3 },
      { date: '2025-12-15', value: 4 },
      { date: '2025-12-16', value: 2 },
      { date: '2025-12-17', value: 3 },
      { date: '2025-12-18', value: 5 },
      { date: '2025-12-19', value: 4 },
      { date: '2025-12-20', value: 3 },
      { date: '2025-12-21', value: 2 },
      { date: '2025-12-22', value: 4 },
      { date: '2025-12-23', value: 3 },
      { date: '2025-12-24', value: 5 },
      { date: '2025-12-25', value: 4 },
      { date: '2025-12-26', value: 3 },
      { date: '2025-12-27', value: 2 },
      { date: '2025-12-28', value: 4 },
      { date: '2025-12-29', value: 3 },
      { date: '2025-12-30', value: 5 },
      { date: '2025-12-31', value: 4 },
      { date: '2026-01-01', value: 3 },
      { date: '2026-01-02', value: 2 },
      { date: '2026-01-03', value: 4 },
      { date: '2026-01-04', value: 3 },
      { date: '2026-01-05', value: 5 },
      { date: '2026-01-06', value: 4 },
      { date: '2026-01-07', value: 3 },
      { date: '2026-01-08', value: 2 },
      { date: '2026-01-09', value: 4 },
      { date: '2026-01-10', value: 3 },
      { date: '2026-01-11', value: 5 },
      { date: '2026-01-12', value: 4 },
      { date: '2026-01-13', value: 3 },
      // Jan 14 - Feb 5: Baseline period (2-6 range)
      { date: '2026-01-14', value: 4 },
      { date: '2026-01-15', value: 5 },
      { date: '2026-01-16', value: 3 },
      { date: '2026-01-17', value: 4 },
      { date: '2026-01-18', value: 6 },
      { date: '2026-01-19', value: 5 },
      { date: '2026-01-20', value: 4 },
      { date: '2026-01-21', value: 3 },
      { date: '2026-01-22', value: 5 },
      { date: '2026-01-23', value: 4 },
      { date: '2026-01-24', value: 6 },
      { date: '2026-01-25', value: 5 },
      { date: '2026-01-26', value: 4 },
      { date: '2026-01-27', value: 3 },
      { date: '2026-01-28', value: 5 },
      { date: '2026-01-29', value: 4 },
      { date: '2026-01-30', value: 6 },
      { date: '2026-01-31', value: 5 },
      { date: '2026-02-01', value: 4 },
      { date: '2026-02-02', value: 3 },
      { date: '2026-02-03', value: 5 },
      { date: '2026-02-04', value: 4 },
      { date: '2026-02-05', value: 6 },
      // Feb 6 - Feb 26: Building up to peak
      { date: '2026-02-06', value: 5 },
      { date: '2026-02-07', value: 6 },
      { date: '2026-02-08', value: 5 },
      { date: '2026-02-09', value: 7 },
      { date: '2026-02-10', value: 6 },
      { date: '2026-02-11', value: 5 },
      { date: '2026-02-12', value: 7 },
      { date: '2026-02-13', value: 6 },
      { date: '2026-02-14', value: 5 },
      { date: '2026-02-15', value: 7 },
      { date: '2026-02-16', value: 6 },
      { date: '2026-02-17', value: 7 },
      { date: '2026-02-18', value: 6 },
      { date: '2026-02-19', value: 7 },
      { date: '2026-02-20', value: 6 },
      { date: '2026-02-21', value: 7 },
      { date: '2026-02-22', value: 7 },
      { date: '2026-02-23', value: 7 },
      { date: '2026-02-24', value: 7 },
      { date: '2026-02-25', value: 8 },
      { date: '2026-02-26', value: 8 }, // Peak around Feb 26
      // Feb 27 - Mar 19: Post-peak period
      { date: '2026-02-27', value: 6 },
      { date: '2026-02-28', value: 5 },
      { date: '2026-03-01', value: 6 },
      { date: '2026-03-02', value: 5 },
      { date: '2026-03-03', value: 4 },
      { date: '2026-03-04', value: 5 },
      { date: '2026-03-05', value: 6 },
      { date: '2026-03-06', value: 5 },
      { date: '2026-03-07', value: 4 },
      { date: '2026-03-08', value: 5 },
      { date: '2026-03-09', value: 6 },
      { date: '2026-03-10', value: 5 },
      { date: '2026-03-11', value: 4 },
      { date: '2026-03-12', value: 5 },
      { date: '2026-03-13', value: 6 },
      { date: '2026-03-14', value: 5 },
      { date: '2026-03-15', value: 4 },
      { date: '2026-03-16', value: 5 },
      { date: '2026-03-17', value: 6 },
      { date: '2026-03-18', value: 5 },
      { date: '2026-03-19', value: 6 },
      // Mar 20 - Apr 10: Building to second peak
      { date: '2026-03-20', value: 5 },
      { date: '2026-03-21', value: 6 },
      { date: '2026-03-22', value: 5 },
      { date: '2026-03-23', value: 7 },
      { date: '2026-03-24', value: 6 },
      { date: '2026-03-25', value: 5 },
      { date: '2026-03-26', value: 7 },
      { date: '2026-03-27', value: 6 },
      { date: '2026-03-28', value: 7 },
      { date: '2026-03-29', value: 6 },
      { date: '2026-03-30', value: 7 },
      { date: '2026-03-31', value: 7 },
      { date: '2026-04-01', value: 7 },
      { date: '2026-04-02', value: 7 },
      { date: '2026-04-03', value: 7 },
      { date: '2026-04-04', value: 7 },
      { date: '2026-04-05', value: 7 },
      { date: '2026-04-06', value: 7 },
      { date: '2026-04-07', value: 8 },
      { date: '2026-04-08', value: 7 },
      { date: '2026-04-09', value: 8 },
      { date: '2026-04-10', value: 8 } // Peak around Apr 10
    ]
  },
  queriesExecuted: {
    summary: 371800,
    timeSeries: [
      // Oct 14 - Nov 13: Early period (lower baseline, 1k-3k range)
      { date: '2025-10-14', value: 1800 },
      { date: '2025-10-15', value: 2200 },
      { date: '2025-10-16', value: 1500 },
      { date: '2025-10-17', value: 1900 },
      { date: '2025-10-18', value: 2500 },
      { date: '2025-10-19', value: 2100 },
      { date: '2025-10-20', value: 1800 },
      { date: '2025-10-21', value: 1400 },
      { date: '2025-10-22', value: 2300 },
      { date: '2025-10-23', value: 2000 },
      { date: '2025-10-24', value: 2600 },
      { date: '2025-10-25', value: 2200 },
      { date: '2025-10-26', value: 1900 },
      { date: '2025-10-27', value: 1500 },
      { date: '2025-10-28', value: 2400 },
      { date: '2025-10-29', value: 2100 },
      { date: '2025-10-30', value: 2700 },
      { date: '2025-10-31', value: 2300 },
      { date: '2025-11-01', value: 2000 },
      { date: '2025-11-02', value: 1600 },
      { date: '2025-11-03', value: 2500 },
      { date: '2025-11-04', value: 2200 },
      { date: '2025-11-05', value: 2800 },
      { date: '2025-11-06', value: 2400 },
      { date: '2025-11-07', value: 2100 },
      { date: '2025-11-08', value: 1700 },
      { date: '2025-11-09', value: 2600 },
      { date: '2025-11-10', value: 2300 },
      { date: '2025-11-11', value: 2900 },
      { date: '2025-11-12', value: 2500 },
      { date: '2025-11-13', value: 2200 },
      // Nov 14 - Dec 13: Growing period (2k-4k range)
      { date: '2025-11-14', value: 2800 },
      { date: '2025-11-15', value: 3200 },
      { date: '2025-11-16', value: 2400 },
      { date: '2025-11-17', value: 2900 },
      { date: '2025-11-18', value: 3500 },
      { date: '2025-11-19', value: 3100 },
      { date: '2025-11-20', value: 2800 },
      { date: '2025-11-21', value: 2400 },
      { date: '2025-11-22', value: 3300 },
      { date: '2025-11-23', value: 3000 },
      { date: '2025-11-24', value: 3600 },
      { date: '2025-11-25', value: 3200 },
      { date: '2025-11-26', value: 2900 },
      { date: '2025-11-27', value: 2500 },
      { date: '2025-11-28', value: 3400 },
      { date: '2025-11-29', value: 3100 },
      { date: '2025-11-30', value: 3700 },
      { date: '2025-12-01', value: 3300 },
      { date: '2025-12-02', value: 3000 },
      { date: '2025-12-03', value: 2600 },
      { date: '2025-12-04', value: 3500 },
      { date: '2025-12-05', value: 3200 },
      { date: '2025-12-06', value: 3800 },
      { date: '2025-12-07', value: 3400 },
      { date: '2025-12-08', value: 3100 },
      { date: '2025-12-09', value: 2700 },
      { date: '2025-12-10', value: 3600 },
      { date: '2025-12-11', value: 3300 },
      { date: '2025-12-12', value: 3900 },
      { date: '2025-12-13', value: 3500 },
      // Dec 14 - Jan 13: Approaching baseline (3k-5k range)
      { date: '2025-12-14', value: 3200 },
      { date: '2025-12-15', value: 3600 },
      { date: '2025-12-16', value: 2800 },
      { date: '2025-12-17', value: 3300 },
      { date: '2025-12-18', value: 4000 },
      { date: '2025-12-19', value: 3600 },
      { date: '2025-12-20', value: 3200 },
      { date: '2025-12-21', value: 2800 },
      { date: '2025-12-22', value: 3700 },
      { date: '2025-12-23', value: 3400 },
      { date: '2025-12-24', value: 4100 },
      { date: '2025-12-25', value: 3700 },
      { date: '2025-12-26', value: 3300 },
      { date: '2025-12-27', value: 2900 },
      { date: '2025-12-28', value: 3800 },
      { date: '2025-12-29', value: 3500 },
      { date: '2025-12-30', value: 4200 },
      { date: '2025-12-31', value: 3800 },
      { date: '2026-01-01', value: 3400 },
      { date: '2026-01-02', value: 3000 },
      { date: '2026-01-03', value: 3900 },
      { date: '2026-01-04', value: 3600 },
      { date: '2026-01-05', value: 4300 },
      { date: '2026-01-06', value: 3900 },
      { date: '2026-01-07', value: 3500 },
      { date: '2026-01-08', value: 3100 },
      { date: '2026-01-09', value: 4000 },
      { date: '2026-01-10', value: 3700 },
      { date: '2026-01-11', value: 4400 },
      { date: '2026-01-12', value: 4000 },
      { date: '2026-01-13', value: 3600 },
      // Jan 14 - Feb 5: Baseline period (2k-6k range)
      { date: '2026-01-14', value: 3500 },
      { date: '2026-01-15', value: 4200 },
      { date: '2026-01-16', value: 2800 },
      { date: '2026-01-17', value: 3600 },
      { date: '2026-01-18', value: 4800 },
      { date: '2026-01-19', value: 4100 },
      { date: '2026-01-20', value: 3500 },
      { date: '2026-01-21', value: 2900 },
      { date: '2026-01-22', value: 4300 },
      { date: '2026-01-23', value: 3700 },
      { date: '2026-01-24', value: 4900 },
      { date: '2026-01-25', value: 4200 },
      { date: '2026-01-26', value: 3600 },
      { date: '2026-01-27', value: 3000 },
      { date: '2026-01-28', value: 4400 },
      { date: '2026-01-29', value: 3800 },
      { date: '2026-01-30', value: 5000 },
      { date: '2026-01-31', value: 4300 },
      { date: '2026-02-01', value: 3700 },
      { date: '2026-02-02', value: 3100 },
      { date: '2026-02-03', value: 4500 },
      { date: '2026-02-04', value: 3900 },
      { date: '2026-02-05', value: 5100 },
      // Feb 6 - Feb 26: Building up to peak
      { date: '2026-02-06', value: 4400 },
      { date: '2026-02-07', value: 5200 },
      { date: '2026-02-08', value: 4600 },
      { date: '2026-02-09', value: 5800 },
      { date: '2026-02-10', value: 5000 },
      { date: '2026-02-11', value: 5400 },
      { date: '2026-02-12', value: 6000 },
      { date: '2026-02-13', value: 5500 },
      { date: '2026-02-14', value: 4800 },
      { date: '2026-02-15', value: 6200 },
      { date: '2026-02-16', value: 5600 },
      { date: '2026-02-17', value: 6400 },
      { date: '2026-02-18', value: 5800 },
      { date: '2026-02-19', value: 6600 },
      { date: '2026-02-20', value: 6000 },
      { date: '2026-02-21', value: 6800 },
      { date: '2026-02-22', value: 6200 },
      { date: '2026-02-23', value: 6900 },
      { date: '2026-02-24', value: 6500 },
      { date: '2026-02-25', value: 7000 },
      { date: '2026-02-26', value: 7000 }, // Peak around Feb 26
      // Feb 27 - Mar 19: Post-peak period
      { date: '2026-02-27', value: 5800 },
      { date: '2026-02-28', value: 5000 },
      { date: '2026-03-01', value: 5600 },
      { date: '2026-03-02', value: 4800 },
      { date: '2026-03-03', value: 4000 },
      { date: '2026-03-04', value: 5200 },
      { date: '2026-03-05', value: 5400 },
      { date: '2026-03-06', value: 4600 },
      { date: '2026-03-07', value: 3800 },
      { date: '2026-03-08', value: 5000 },
      { date: '2026-03-09', value: 5500 },
      { date: '2026-03-10', value: 4700 },
      { date: '2026-03-11', value: 3900 },
      { date: '2026-03-12', value: 5100 },
      { date: '2026-03-13', value: 5600 },
      { date: '2026-03-14', value: 4800 },
      { date: '2026-03-15', value: 4000 },
      { date: '2026-03-16', value: 5200 },
      { date: '2026-03-17', value: 5700 },
      { date: '2026-03-18', value: 4900 },
      { date: '2026-03-19', value: 6000 },
      // Mar 20 - Apr 10: Building to second peak
      { date: '2026-03-20', value: 5200 },
      { date: '2026-03-21', value: 5800 },
      { date: '2026-03-22', value: 5000 },
      { date: '2026-03-23', value: 6400 },
      { date: '2026-03-24', value: 5600 },
      { date: '2026-03-25', value: 4800 },
      { date: '2026-03-26', value: 6200 },
      { date: '2026-03-27', value: 5400 },
      { date: '2026-03-28', value: 6600 },
      { date: '2026-03-29', value: 5800 },
      { date: '2026-03-30', value: 6800 },
      { date: '2026-03-31', value: 6000 },
      { date: '2026-04-01', value: 6500 },
      { date: '2026-04-02', value: 6200 },
      { date: '2026-04-03', value: 6400 },
      { date: '2026-04-04', value: 6600 },
      { date: '2026-04-05', value: 6800 },
      { date: '2026-04-06', value: 6500 },
      { date: '2026-04-07', value: 6900 },
      { date: '2026-04-08', value: 6700 },
      { date: '2026-04-09', value: 7000 },
      { date: '2026-04-10', value: 7000 }
    ]
  },
  queriesBySource: {    
  },
  avgResponseTimeWorkflow: {
    summary: 10.5,
    timeSeries: [
      // Oct 14 - Nov 13: Early period (higher response times, 11-13s range)
      { date: '2025-10-14', value: 11.5 },
      { date: '2025-10-15', value: 11.8 },
      { date: '2025-10-16', value: 11.2 },
      { date: '2025-10-17', value: 11.9 },
      { date: '2025-10-18', value: 11.4 },
      { date: '2025-10-19', value: 11.7 },
      { date: '2025-10-20', value: 11.1 },
      { date: '2025-10-21', value: 11.6 },
      { date: '2025-10-22', value: 12.0 },
      { date: '2025-10-23', value: 11.3 },
      { date: '2025-10-24', value: 11.8 },
      { date: '2025-10-25', value: 11.2 },
      { date: '2025-10-26', value: 11.5 },
      { date: '2025-10-27', value: 11.9 },
      { date: '2025-10-28', value: 11.4 },
      { date: '2025-10-29', value: 11.7 },
      { date: '2025-10-30', value: 12.1 },
      { date: '2025-10-31', value: 11.6 },
      { date: '2025-11-01', value: 11.3 },
      { date: '2025-11-02', value: 11.8 },
      { date: '2025-11-03', value: 11.2 },
      { date: '2025-11-04', value: 11.5 },
      { date: '2025-11-05', value: 11.9 },
      { date: '2025-11-06', value: 11.4 },
      { date: '2025-11-07', value: 11.7 },
      { date: '2025-11-08', value: 12.0 },
      { date: '2025-11-09', value: 11.3 },
      { date: '2025-11-10', value: 11.6 },
      { date: '2025-11-11', value: 12.2 },
      { date: '2025-11-12', value: 11.5 },
      { date: '2025-11-13', value: 11.8 },
      // Nov 14 - Dec 13: Improving period (10-12s range)
      { date: '2025-11-14', value: 11.2 },
      { date: '2025-11-15', value: 11.5 },
      { date: '2025-11-16', value: 10.9 },
      { date: '2025-11-17', value: 11.3 },
      { date: '2025-11-18', value: 10.8 },
      { date: '2025-11-19', value: 11.1 },
      { date: '2025-11-20', value: 10.7 },
      { date: '2025-11-21', value: 11.0 },
      { date: '2025-11-22', value: 10.6 },
      { date: '2025-11-23', value: 10.9 },
      { date: '2025-11-24', value: 10.5 },
      { date: '2025-11-25', value: 10.8 },
      { date: '2025-11-26', value: 10.4 },
      { date: '2025-11-27', value: 10.7 },
      { date: '2025-11-28', value: 10.3 },
      { date: '2025-11-29', value: 10.6 },
      { date: '2025-11-30', value: 10.2 },
      { date: '2025-12-01', value: 10.5 },
      { date: '2025-12-02', value: 10.1 },
      { date: '2025-12-03', value: 10.4 },
      { date: '2025-12-04', value: 10.0 },
      { date: '2025-12-05', value: 10.3 },
      { date: '2025-12-06', value: 9.9 },
      { date: '2025-12-07', value: 10.2 },
      { date: '2025-12-08', value: 9.8 },
      { date: '2025-12-09', value: 10.1 },
      { date: '2025-12-10', value: 9.7 },
      { date: '2025-12-11', value: 10.0 },
      { date: '2025-12-12', value: 9.6 },
      { date: '2025-12-13', value: 9.9 },
      // Dec 14 - Jan 13: Approaching baseline (9-11s range)
      { date: '2025-12-14', value: 10.2 },
      { date: '2025-12-15', value: 10.5 },
      { date: '2025-12-16', value: 9.9 },
      { date: '2025-12-17', value: 10.3 },
      { date: '2025-12-18', value: 9.8 },
      { date: '2025-12-19', value: 10.1 },
      { date: '2025-12-20', value: 9.7 },
      { date: '2025-12-21', value: 10.0 },
      { date: '2025-12-22', value: 9.6 },
      { date: '2025-12-23', value: 9.9 },
      { date: '2025-12-24', value: 9.5 },
      { date: '2025-12-25', value: 9.8 },
      { date: '2025-12-26', value: 9.4 },
      { date: '2025-12-27', value: 9.7 },
      { date: '2025-12-28', value: 9.3 },
      { date: '2025-12-29', value: 9.6 },
      { date: '2025-12-30', value: 9.2 },
      { date: '2025-12-31', value: 9.5 },
      { date: '2026-01-01', value: 9.1 },
      { date: '2026-01-02', value: 9.4 },
      { date: '2026-01-03', value: 9.0 },
      { date: '2026-01-04', value: 9.3 },
      { date: '2026-01-05', value: 9.7 },
      { date: '2026-01-06', value: 9.4 },
      { date: '2026-01-07', value: 9.8 },
      { date: '2026-01-08', value: 9.5 },
      { date: '2026-01-09', value: 9.9 },
      { date: '2026-01-10', value: 9.6 },
      { date: '2026-01-11', value: 10.0 },
      { date: '2026-01-12', value: 9.7 },
      { date: '2026-01-13', value: 10.1 },
      // Jan 14 - Feb 5: Baseline around 10s, dips below 10s around Feb 5
      { date: '2026-01-14', value: 10.2 },
      { date: '2026-01-15', value: 10.3 },
      { date: '2026-01-16', value: 10.1 },
      { date: '2026-01-17', value: 10.4 },
      { date: '2026-01-18', value: 10.2 },
      { date: '2026-01-19', value: 10.3 },
      { date: '2026-01-20', value: 10.1 },
      { date: '2026-01-21', value: 10.2 },
      { date: '2026-01-22', value: 10.4 },
      { date: '2026-01-23', value: 10.3 },
      { date: '2026-01-24', value: 10.2 },
      { date: '2026-01-25', value: 10.1 },
      { date: '2026-01-26', value: 10.3 },
      { date: '2026-01-27', value: 10.2 },
      { date: '2026-01-28', value: 10.4 },
      { date: '2026-01-29', value: 10.3 },
      { date: '2026-01-30', value: 10.1 },
      { date: '2026-01-31', value: 10.2 },
      { date: '2026-02-01', value: 9.9 },
      { date: '2026-02-02', value: 9.8 },
      { date: '2026-02-03', value: 9.7 },
      { date: '2026-02-04', value: 9.6 },
      { date: '2026-02-05', value: 9.5 }, // Dip below 10s around Feb 5
      // Feb 6 - Feb 26: Rising above 10s, peak around Feb 26
      { date: '2026-02-06', value: 9.8 },
      { date: '2026-02-07', value: 10.1 },
      { date: '2026-02-08', value: 10.3 },
      { date: '2026-02-09', value: 10.5 },
      { date: '2026-02-10', value: 10.7 },
      { date: '2026-02-11', value: 10.9 },
      { date: '2026-02-12', value: 11.1 },
      { date: '2026-02-13', value: 11.3 },
      { date: '2026-02-14', value: 11.5 },
      { date: '2026-02-15', value: 11.7 },
      { date: '2026-02-16', value: 11.9 },
      { date: '2026-02-17', value: 12.1 },
      { date: '2026-02-18', value: 12.3 },
      { date: '2026-02-19', value: 12.5 },
      { date: '2026-02-20', value: 12.7 },
      { date: '2026-02-21', value: 12.9 },
      { date: '2026-02-22', value: 13.1 },
      { date: '2026-02-23', value: 13.3 },
      { date: '2026-02-24', value: 13.5 },
      { date: '2026-02-25', value: 13.7 },
      { date: '2026-02-26', value: 13.8 }, // Peak around Feb 26
      // Feb 27 - Mar 19: Post-peak period
      { date: '2026-02-27', value: 12.5 },
      { date: '2026-02-28', value: 11.2 },
      { date: '2026-03-01', value: 11.8 },
      { date: '2026-03-02', value: 10.5 },
      { date: '2026-03-03', value: 9.8 },
      { date: '2026-03-04', value: 10.9 },
      { date: '2026-03-05', value: 11.2 },
      { date: '2026-03-06', value: 10.1 },
      { date: '2026-03-07', value: 9.5 },
      { date: '2026-03-08', value: 10.6 },
      { date: '2026-03-09', value: 11.1 },
      { date: '2026-03-10', value: 10.2 },
      { date: '2026-03-11', value: 9.6 },
      { date: '2026-03-12', value: 10.7 },
      { date: '2026-03-13', value: 11.3 },
      { date: '2026-03-14', value: 10.4 },
      { date: '2026-03-15', value: 9.7 },
      { date: '2026-03-16', value: 10.8 },
      { date: '2026-03-17', value: 11.4 },
      { date: '2026-03-18', value: 10.5 },
      { date: '2026-03-19', value: 11.6 },
      // Mar 20 - Apr 10: Building to second peak
      { date: '2026-03-20', value: 10.7 },
      { date: '2026-03-21', value: 11.5 },
      { date: '2026-03-22', value: 10.3 },
      { date: '2026-03-23', value: 12.1 },
      { date: '2026-03-24', value: 11.2 },
      { date: '2026-03-25', value: 10.1 },
      { date: '2026-03-26', value: 11.9 },
      { date: '2026-03-27', value: 11.0 },
      { date: '2026-03-28', value: 12.5 },
      { date: '2026-03-29', value: 11.6 },
      { date: '2026-03-30', value: 12.8 },
      { date: '2026-03-31', value: 11.9 },
      { date: '2026-04-01', value: 12.3 },
      { date: '2026-04-02', value: 12.1 },
      { date: '2026-04-03', value: 12.4 },
      { date: '2026-04-04', value: 12.6 },
      { date: '2026-04-05', value: 12.8 },
      { date: '2026-04-06', value: 12.5 },
      { date: '2026-04-07', value: 13.0 },
      { date: '2026-04-08', value: 12.7 },
      { date: '2026-04-09', value: 13.2 },
      { date: '2026-04-10', value: 13.3 } // Peak around Apr 10
    ]
  },
  firewallApiCalls: {
    summary: 1200000,
    timeSeries: [
      // Oct 14 - Nov 13: Early period (lower baseline, 20k-35k range)
      { date: '2025-10-14', value: 22000 },
      { date: '2025-10-15', value: 26000 },
      { date: '2025-10-16', value: 19000 },
      { date: '2025-10-17', value: 24000 },
      { date: '2025-10-18', value: 29000 },
      { date: '2025-10-19', value: 25000 },
      { date: '2025-10-20', value: 22000 },
      { date: '2025-10-21', value: 18000 },
      { date: '2025-10-22', value: 27000 },
      { date: '2025-10-23', value: 24000 },
      { date: '2025-10-24', value: 31000 },
      { date: '2025-10-25', value: 27000 },
      { date: '2025-10-26', value: 23000 },
      { date: '2025-10-27', value: 20000 },
      { date: '2025-10-28', value: 28000 },
      { date: '2025-10-29', value: 25000 },
      { date: '2025-10-30', value: 32000 },
      { date: '2025-10-31', value: 28000 },
      { date: '2025-11-01', value: 24000 },
      { date: '2025-11-02', value: 21000 },
      { date: '2025-11-03', value: 29000 },
      { date: '2025-11-04', value: 26000 },
      { date: '2025-11-05', value: 33000 },
      { date: '2025-11-06', value: 29000 },
      { date: '2025-11-07', value: 25000 },
      { date: '2025-11-08', value: 22000 },
      { date: '2025-11-09', value: 30000 },
      { date: '2025-11-10', value: 27000 },
      { date: '2025-11-11', value: 34000 },
      { date: '2025-11-12', value: 30000 },
      { date: '2025-11-13', value: 26000 },
      // Nov 14 - Dec 13: Growing period (30k-45k range)
      { date: '2025-11-14', value: 35000 },
      { date: '2025-11-15', value: 39000 },
      { date: '2025-11-16', value: 32000 },
      { date: '2025-11-17', value: 37000 },
      { date: '2025-11-18', value: 42000 },
      { date: '2025-11-19', value: 38000 },
      { date: '2025-11-20', value: 35000 },
      { date: '2025-11-21', value: 30000 },
      { date: '2025-11-22', value: 40000 },
      { date: '2025-11-23', value: 37000 },
      { date: '2025-11-24', value: 43000 },
      { date: '2025-11-25', value: 39000 },
      { date: '2025-11-26', value: 36000 },
      { date: '2025-11-27', value: 31000 },
      { date: '2025-11-28', value: 41000 },
      { date: '2025-11-29', value: 38000 },
      { date: '2025-11-30', value: 44000 },
      { date: '2025-12-01', value: 40000 },
      { date: '2025-12-02', value: 37000 },
      { date: '2025-12-03', value: 32000 },
      { date: '2025-12-04', value: 42000 },
      { date: '2025-12-05', value: 39000 },
      { date: '2025-12-06', value: 45000 },
      { date: '2025-12-07', value: 41000 },
      { date: '2025-12-08', value: 38000 },
      { date: '2025-12-09', value: 33000 },
      { date: '2025-12-10', value: 43000 },
      { date: '2025-12-11', value: 40000 },
      { date: '2025-12-12', value: 46000 },
      { date: '2025-12-13', value: 42000 },
      // Dec 14 - Jan 13: Approaching baseline (38k-55k range)
      { date: '2025-12-14', value: 40000 },
      { date: '2025-12-15', value: 44000 },
      { date: '2025-12-16', value: 36000 },
      { date: '2025-12-17', value: 41000 },
      { date: '2025-12-18', value: 48000 },
      { date: '2025-12-19', value: 44000 },
      { date: '2025-12-20', value: 40000 },
      { date: '2025-12-21', value: 35000 },
      { date: '2025-12-22', value: 45000 },
      { date: '2025-12-23', value: 42000 },
      { date: '2025-12-24', value: 49000 },
      { date: '2025-12-25', value: 45000 },
      { date: '2025-12-26', value: 41000 },
      { date: '2025-12-27', value: 36000 },
      { date: '2025-12-28', value: 46000 },
      { date: '2025-12-29', value: 43000 },
      { date: '2025-12-30', value: 50000 },
      { date: '2025-12-31', value: 46000 },
      { date: '2026-01-01', value: 42000 },
      { date: '2026-01-02', value: 37000 },
      { date: '2026-01-03', value: 47000 },
      { date: '2026-01-04', value: 44000 },
      { date: '2026-01-05', value: 51000 },
      { date: '2026-01-06', value: 47000 },
      { date: '2026-01-07', value: 43000 },
      { date: '2026-01-08', value: 38000 },
      { date: '2026-01-09', value: 48000 },
      { date: '2026-01-10', value: 45000 },
      { date: '2026-01-11', value: 52000 },
      { date: '2026-01-12', value: 48000 },
      { date: '2026-01-13', value: 44000 },
      // Jan 14 - Feb 5: Baseline period (40k-60k range)
      { date: '2026-01-14', value: 45000 },
      { date: '2026-01-15', value: 52000 },
      { date: '2026-01-16', value: 38000 },
      { date: '2026-01-17', value: 48000 },
      { date: '2026-01-18', value: 55000 },
      { date: '2026-01-19', value: 49000 },
      { date: '2026-01-20', value: 43000 },
      { date: '2026-01-21', value: 36000 },
      { date: '2026-01-22', value: 51000 },
      { date: '2026-01-23', value: 47000 },
      { date: '2026-01-24', value: 58000 },
      { date: '2026-01-25', value: 52000 },
      { date: '2026-01-26', value: 46000 },
      { date: '2026-01-27', value: 40000 },
      { date: '2026-01-28', value: 54000 },
      { date: '2026-01-29', value: 50000 },
      { date: '2026-01-30', value: 59000 },
      { date: '2026-01-31', value: 53000 },
      { date: '2026-02-01', value: 47000 },
      { date: '2026-02-02', value: 41000 },
      { date: '2026-02-03', value: 55000 },
      { date: '2026-02-04', value: 51000 },
      { date: '2026-02-05', value: 60000 },
      // Feb 6 - Feb 26: Building up to peak
      { date: '2026-02-06', value: 54000 },
      { date: '2026-02-07', value: 62000 },
      { date: '2026-02-08', value: 58000 },
      { date: '2026-02-09', value: 68000 },
      { date: '2026-02-10', value: 60000 },
      { date: '2026-02-11', value: 64000 },
      { date: '2026-02-12', value: 72000 },
      { date: '2026-02-13', value: 66000 },
      { date: '2026-02-14', value: 58000 },
      { date: '2026-02-15', value: 74000 },
      { date: '2026-02-16', value: 68000 },
      { date: '2026-02-17', value: 78000 },
      { date: '2026-02-18', value: 72000 },
      { date: '2026-02-19', value: 82000 },
      { date: '2026-02-20', value: 76000 },
      { date: '2026-02-21', value: 86000 },
      { date: '2026-02-22', value: 80000 },
      { date: '2026-02-23', value: 90000 },
      { date: '2026-02-24', value: 85000 },
      { date: '2026-02-25', value: 95000 },
      { date: '2026-02-26', value: 100000 }, // Peak around Feb 26
      // Feb 27 - Mar 19: Post-peak period
      { date: '2026-02-27', value: 88000 },
      { date: '2026-02-28', value: 76000 },
      { date: '2026-03-01', value: 82000 },
      { date: '2026-03-02', value: 70000 },
      { date: '2026-03-03', value: 60000 },
      { date: '2026-03-04', value: 78000 },
      { date: '2026-03-05', value: 80000 },
      { date: '2026-03-06', value: 68000 },
      { date: '2026-03-07', value: 58000 },
      { date: '2026-03-08', value: 76000 },
      { date: '2026-03-09', value: 84000 },
      { date: '2026-03-10', value: 72000 },
      { date: '2026-03-11', value: 62000 },
      { date: '2026-03-12', value: 80000 },
      { date: '2026-03-13', value: 88000 },
      { date: '2026-03-14', value: 76000 },
      { date: '2026-03-15', value: 66000 },
      { date: '2026-03-16', value: 84000 },
      { date: '2026-03-17', value: 92000 },
      { date: '2026-03-18', value: 80000 },
      { date: '2026-03-19', value: 96000 },
      // Mar 20 - Apr 10: Building to second peak
      { date: '2026-03-20', value: 84000 },
      { date: '2026-03-21', value: 92000 },
      { date: '2026-03-22', value: 80000 },
      { date: '2026-03-23', value: 100000 },
      { date: '2026-03-24', value: 88000 },
      { date: '2026-03-25', value: 76000 },
      { date: '2026-03-26', value: 98000 },
      { date: '2026-03-27', value: 86000 },
      { date: '2026-03-28', value: 104000 },
      { date: '2026-03-29', value: 92000 },
      { date: '2026-03-30', value: 108000 },
      { date: '2026-03-31', value: 96000 },
      { date: '2026-04-01', value: 104000 },
      { date: '2026-04-02', value: 100000 },
      { date: '2026-04-03', value: 102000 },
      { date: '2026-04-04', value: 106000 },
      { date: '2026-04-05', value: 108000 },
      { date: '2026-04-06', value: 104000 },
      { date: '2026-04-07', value: 110000 },
      { date: '2026-04-08', value: 107000 },
      { date: '2026-04-09', value: 112000 },
      { date: '2026-04-10', value: 112000 }
    ]
  },
  avgResponseTimeFirewall: {
    summary: 2.3,
    timeSeries: [
      // Oct 14 - Nov 13: Early period (higher response times, 2.5-4.5s range)
      { date: '2025-10-14', value: 2.8 },
      { date: '2025-10-15', value: 4.2 },
      { date: '2025-10-16', value: 2.5 },
      { date: '2025-10-17', value: 3.8 },
      { date: '2025-10-18', value: 2.2 },
      { date: '2025-10-19', value: 4.5 },
      { date: '2025-10-20', value: 2.6 },
      { date: '2025-10-21', value: 3.9 },
      { date: '2025-10-22', value: 2.1 },
      { date: '2025-10-23', value: 4.3 },
      { date: '2025-10-24', value: 2.4 },
      { date: '2025-10-25', value: 3.7 },
      { date: '2025-10-26', value: 2.0 },
      { date: '2025-10-27', value: 4.1 },
      { date: '2025-10-28', value: 2.3 },
      { date: '2025-10-29', value: 3.6 },
      { date: '2025-10-30', value: 1.9 },
      { date: '2025-10-31', value: 4.0 },
      { date: '2025-11-01', value: 2.2 },
      { date: '2025-11-02', value: 3.5 },
      { date: '2025-11-03', value: 1.8 },
      { date: '2025-11-04', value: 3.9 },
      { date: '2025-11-05', value: 2.1 },
      { date: '2025-11-06', value: 3.4 },
      { date: '2025-11-07', value: 1.7 },
      { date: '2025-11-08', value: 3.8 },
      { date: '2025-11-09', value: 2.0 },
      { date: '2025-11-10', value: 3.3 },
      { date: '2025-11-11', value: 1.6 },
      { date: '2025-11-12', value: 3.7 },
      { date: '2025-11-13', value: 1.9 },
      // Nov 14 - Dec 13: Improving period (2.0-3.5s range)
      { date: '2025-11-14', value: 3.2 },
      { date: '2025-11-15', value: 2.4 },
      { date: '2025-11-16', value: 3.0 },
      { date: '2025-11-17', value: 2.2 },
      { date: '2025-11-18', value: 2.8 },
      { date: '2025-11-19', value: 2.0 },
      { date: '2025-11-20', value: 2.6 },
      { date: '2025-11-21', value: 1.8 },
      { date: '2025-11-22', value: 2.4 },
      { date: '2025-11-23', value: 1.6 },
      { date: '2025-11-24', value: 2.2 },
      { date: '2025-11-25', value: 1.4 },
      { date: '2025-11-26', value: 2.0 },
      { date: '2025-11-27', value: 2.8 },
      { date: '2025-11-28', value: 2.1 },
      { date: '2025-11-29', value: 2.7 },
      { date: '2025-11-30', value: 1.9 },
      { date: '2025-12-01', value: 2.5 },
      { date: '2025-12-02', value: 1.7 },
      { date: '2025-12-03', value: 2.3 },
      { date: '2025-12-04', value: 1.5 },
      { date: '2025-12-05', value: 2.1 },
      { date: '2025-12-06', value: 2.9 },
      { date: '2025-12-07', value: 2.2 },
      { date: '2025-12-08', value: 2.8 },
      { date: '2025-12-09', value: 2.0 },
      { date: '2025-12-10', value: 2.6 },
      { date: '2025-12-11', value: 1.8 },
      { date: '2025-12-12', value: 2.4 },
      { date: '2025-12-13', value: 1.6 },
      // Dec 14 - Jan 13: Approaching baseline (1.5-2.8s range)
      { date: '2025-12-14', value: 2.2 },
      { date: '2025-12-15', value: 1.4 },
      { date: '2025-12-16', value: 2.0 },
      { date: '2025-12-17', value: 2.6 },
      { date: '2025-12-18', value: 1.8 },
      { date: '2025-12-19', value: 2.4 },
      { date: '2025-12-20', value: 1.6 },
      { date: '2025-12-21', value: 2.2 },
      { date: '2025-12-22', value: 1.4 },
      { date: '2025-12-23', value: 2.0 },
      { date: '2025-12-24', value: 2.8 },
      { date: '2025-12-25', value: 2.1 },
      { date: '2025-12-26', value: 2.7 },
      { date: '2025-12-27', value: 1.9 },
      { date: '2025-12-28', value: 2.5 },
      { date: '2025-12-29', value: 1.7 },
      { date: '2025-12-30', value: 2.3 },
      { date: '2025-12-31', value: 1.5 },
      { date: '2026-01-01', value: 2.1 },
      { date: '2026-01-02', value: 2.9 },
      { date: '2026-01-03', value: 2.2 },
      { date: '2026-01-04', value: 2.8 },
      { date: '2026-01-05', value: 2.0 },
      { date: '2026-01-06', value: 2.6 },
      { date: '2026-01-07', value: 1.8 },
      { date: '2026-01-08', value: 2.4 },
      { date: '2026-01-09', value: 1.6 },
      { date: '2026-01-10', value: 2.2 },
      { date: '2026-01-11', value: 1.4 },
      { date: '2026-01-12', value: 2.0 },
      { date: '2026-01-13', value: 1.7 },
      // Jan 14 - Apr 10: Multiple peaks pattern
      { date: '2026-01-14', value: 1.8 },
      { date: '2026-01-15', value: 3.2 },
      { date: '2026-01-16', value: 2.1 },
      { date: '2026-01-17', value: 4.5 },
      { date: '2026-01-18', value: 2.3 },
      { date: '2026-01-19', value: 5.1 },
      { date: '2026-01-20', value: 2.8 },
      { date: '2026-01-21', value: 4.2 },
      { date: '2026-01-22', value: 1.9 },
      { date: '2026-01-23', value: 5.8 },
      { date: '2026-01-24', value: 2.5 },
      { date: '2026-01-25', value: 4.7 },
      { date: '2026-01-26', value: 2.0 },
      { date: '2026-01-27', value: 6.2 },
      { date: '2026-01-28', value: 2.4 },
      { date: '2026-01-29', value: 5.3 },
      { date: '2026-01-30', value: 1.7 },
      { date: '2026-01-31', value: 4.9 },
      { date: '2026-02-01', value: 2.6 },
      { date: '2026-02-02', value: 6.5 },
      { date: '2026-02-03', value: 2.1 },
      { date: '2026-02-04', value: 5.4 },
      { date: '2026-02-05', value: 1.9 },
      { date: '2026-02-06', value: 4.8 },
      { date: '2026-02-07', value: 2.3 },
      { date: '2026-02-08', value: 7.1 },
      { date: '2026-02-09', value: 2.7 },
      { date: '2026-02-10', value: 5.6 },
      { date: '2026-02-11', value: 2.0 },
      { date: '2026-02-12', value: 6.8 },
      { date: '2026-02-13', value: 2.4 },
      { date: '2026-02-14', value: 4.3 },
      { date: '2026-02-15', value: 1.8 },
      { date: '2026-02-16', value: 5.9 },
      { date: '2026-02-17', value: 2.5 },
      { date: '2026-02-18', value: 7.3 },
      { date: '2026-02-19', value: 2.1 },
      { date: '2026-02-20', value: 5.2 },
      { date: '2026-02-21', value: 1.6 },
      { date: '2026-02-22', value: 6.4 },
      { date: '2026-02-23', value: 2.8 },
      { date: '2026-02-24', value: 4.7 },
      { date: '2026-02-25', value: 2.2 },
      { date: '2026-02-26', value: 7.8 },
      { date: '2026-02-27', value: 2.6 },
      { date: '2026-02-28', value: 5.1 },
      { date: '2026-03-01', value: 1.9 },
      { date: '2026-03-02', value: 6.7 },
      { date: '2026-03-03', value: 2.3 },
      { date: '2026-03-04', value: 4.9 },
      { date: '2026-03-05', value: 2.0 },
      { date: '2026-03-06', value: 7.2 },
      { date: '2026-03-07', value: 2.4 },
      { date: '2026-03-08', value: 5.5 },
      { date: '2026-03-09', value: 1.7 },
      { date: '2026-03-10', value: 6.1 },
      { date: '2026-03-11', value: 2.5 },
      { date: '2026-03-12', value: 4.6 },
      { date: '2026-03-13', value: 2.1 },
      { date: '2026-03-14', value: 7.5 },
      { date: '2026-03-15', value: 2.7 },
      { date: '2026-03-16', value: 5.3 },
      { date: '2026-03-17', value: 1.8 },
      { date: '2026-03-18', value: 6.9 },
      { date: '2026-03-19', value: 2.2 },
      { date: '2026-03-20', value: 4.8 },
      { date: '2026-03-21', value: 2.0 },
      { date: '2026-03-22', value: 7.6 },
      { date: '2026-03-23', value: 2.6 },
      { date: '2026-03-24', value: 5.4 },
      { date: '2026-03-25', value: 1.9 },
      { date: '2026-03-26', value: 6.3 },
      { date: '2026-03-27', value: 2.3 },
      { date: '2026-03-28', value: 4.7 },
      { date: '2026-03-29', value: 2.1 },
      { date: '2026-03-30', value: 7.9 },
      { date: '2026-03-31', value: 2.5 },
      { date: '2026-04-01', value: 5.7 },
      { date: '2026-04-02', value: 1.8 },
      { date: '2026-04-03', value: 6.8 },
      { date: '2026-04-04', value: 2.4 },
      { date: '2026-04-05', value: 4.9 },
      { date: '2026-04-06', value: 2.0 },
      { date: '2026-04-07', value: 8.1 },
      { date: '2026-04-08', value: 2.6 },
      { date: '2026-04-09', value: 5.5 },
      { date: '2026-04-10', value: 1.9 }
    ]
  }
}

function getDateRangeBounds(range: DateRange): { startDate: Date; endDate: Date } {
  const endDate = new Date('2026-04-10');
  endDate.setHours(23, 59, 59, 999);
  
  const startDate = new Date(endDate);
  startDate.setHours(0, 0, 0, 0);
  
  let daysToSubtract: number;
  switch (range) {
    case "7d":
      daysToSubtract = 6; 
      break;
    case "30d":
      daysToSubtract = 29; 
      break;
    case "90d":
      daysToSubtract = 89; 
      break;
  }
  
  startDate.setTime(endDate.getTime() - (daysToSubtract * 24 * 60 * 60 * 1000));
  
  return { startDate, endDate };
}

function filterTimeSeriesByDateRange(
  timeSeries: TimeSeriesPoint[] | undefined,
  range: DateRange
): TimeSeriesPoint[] | undefined {
  if (!timeSeries) return undefined;

  const { startDate, endDate } = getDateRangeBounds(range);

  return timeSeries.filter(point => {
    const [year, month, day] = point.date.split('-').map(Number);
    const pointDate = new Date(year, month - 1, day);
    pointDate.setHours(0, 0, 0, 0);
    
    return pointDate >= startDate && pointDate <= endDate;
  });
}

export async function fetchDashboardData(
  range: DateRange
): Promise<MockDashboardData> {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const filteredData: MockDashboardData = {
    ...mockDashboardData,
    uniqueLogins: {
      ...mockDashboardData.uniqueLogins,
      timeSeries: filterTimeSeriesByDateRange(
        mockDashboardData.uniqueLogins.timeSeries,
        range
      )
    },
    queriesExecuted: {
      ...mockDashboardData.queriesExecuted,
      timeSeries: filterTimeSeriesByDateRange(
        mockDashboardData.queriesExecuted.timeSeries,
        range
      )
    },
    avgResponseTimeWorkflow: {
      ...mockDashboardData.avgResponseTimeWorkflow,
      timeSeries: filterTimeSeriesByDateRange(
        mockDashboardData.avgResponseTimeWorkflow.timeSeries,
        range
      )
    },
    firewallApiCalls: {
      ...mockDashboardData.firewallApiCalls,
      timeSeries: filterTimeSeriesByDateRange(
        mockDashboardData.firewallApiCalls.timeSeries,
        range
      )
    },
    avgResponseTimeFirewall: {
      ...mockDashboardData.avgResponseTimeFirewall,
      timeSeries: filterTimeSeriesByDateRange(
        mockDashboardData.avgResponseTimeFirewall.timeSeries,
        range
      )
    }
  };
  
  return Promise.resolve(filteredData);
}

export async function fetchChartData(_chartId: string): Promise<any> {
  await new Promise(resolve => setTimeout(resolve, 200))
  
  return Promise.resolve(mockDashboardData)
}

function fetchTimeSeriesData(
  key: keyof typeof mockDashboardData,
  range: DateRange,
  delay = 800
): Promise<{ categories: string[]; values: number[]; total: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const timeSeriesData = (mockDashboardData[key] as MockChartData)?.timeSeries || [];
      
      const filteredData = filterTimeSeriesByDateRange(timeSeriesData, range) || [];
      
      const categories: string[] = [];
      const values: number[] = [];

      filteredData.forEach((point: TimeSeriesPoint) => {
        const date = new Date(point.date);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        categories.push(`${monthNames[date.getMonth()]} ${date.getDate()}`);
        values.push(point.value);
      });

      const total = values.reduce((sum, val) => sum + val, 0);

      resolve({ categories, values, total });
    }, delay);
  });
}

export const fetchUniqueLogins = (
  range: DateRange
): Promise<BarChartData> => {
  return fetchTimeSeriesData("uniqueLogins", range) as Promise<BarChartData>;
};

export const fetchQueriesExecuted = (
  range: DateRange
): Promise<BarChartData> => {
  return fetchTimeSeriesData("queriesExecuted", range) as Promise<BarChartData>;
};

export const fetchAvgResponseTimeWorkflow = (
  range: DateRange
): Promise<LineChartData> => {
  return fetchTimeSeriesData("avgResponseTimeWorkflow", range) as Promise<LineChartData>;
};

export const fetchFirewallApiCalls = (
  range: DateRange
): Promise<BarChartData> => {
  return fetchTimeSeriesData("firewallApiCalls", range) as Promise<BarChartData>;
};

export const fetchAvgResponseTimeFirewall = (
  range: DateRange
): Promise<LineChartData> => {
  return fetchTimeSeriesData("avgResponseTimeFirewall", range) as Promise<LineChartData>;
};

function generateSourceBreakdown(totalQueries: number, date: string): Array<{ source: string; count: number }> {
  const dateHash = date.split('-').reduce((sum, part) => sum + parseInt(part), 0);
  const variation = (dateHash % 10) / 100;
  
  const ratios = {
    'Slack': 0.82 + (variation * 0.05),
    'Microsoft Teams': 0.10 - (variation * 0.02),
    'AWS Cloud': 0.038 + (variation * 0.01),
    'Google Cloud': 0.01 + (variation * 0.005),
    'Oracle': 0.0048 + (variation * 0.001),
    'G Suite Gmail': 0.0039 + (variation * 0.001)
  };
  
  const totalRatio = Object.values(ratios).reduce((sum, r) => sum + r, 0);
  const normalizedRatios = Object.fromEntries(
    Object.entries(ratios).map(([k, v]) => [k, v / totalRatio])
  );
  
  const sources = [
    { source: 'Slack', count: Math.round(totalQueries * normalizedRatios['Slack']) },
    { source: 'Microsoft Teams', count: Math.round(totalQueries * normalizedRatios['Microsoft Teams']) },
    { source: 'AWS Cloud', count: Math.round(totalQueries * normalizedRatios['AWS Cloud']) },
    { source: 'Google Cloud', count: Math.round(totalQueries * normalizedRatios['Google Cloud']) },
    { source: 'Oracle', count: Math.round(totalQueries * normalizedRatios['Oracle']) },
    { source: 'G Suite Gmail', count: Math.round(totalQueries * normalizedRatios['G Suite Gmail']) }
  ];
  
  const actualTotal = sources.reduce((sum, s) => sum + s.count, 0);
  const diff = totalQueries - actualTotal;
  if (diff !== 0) {
    sources[0].count += diff;
  }
  
  return sources;
}

export const fetchQueriesBySource = (
  range: DateRange
): Promise<QueriesBySourceData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const queriesExecutedData = mockDashboardData.queriesExecuted.timeSeries || [];
      const filteredQueries = filterTimeSeriesByDateRange(queriesExecutedData, range) || [];
      
      const sourceTotals: Record<string, number> = {};
      
      filteredQueries.forEach((point: TimeSeriesPoint) => {
        const breakdown = generateSourceBreakdown(point.value, point.date);
        breakdown.forEach(({ source, count }) => {
          sourceTotals[source] = (sourceTotals[source] || 0) + count;
        });
      });
      
      const items: QueriesBySourceData = Object.entries(sourceTotals).map(([source, queries]) => ({
        source,
        queries
      }));
      
      items.sort((a, b) => b.queries - a.queries);

      resolve(items);
    }, 800);
  });
};

export const fetchUsersData = (
  range: DateRange
): Promise<import('../types/dashboard.types').UsersData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const usersTimeSeries = mockDashboardData.users.timeSeries || [];
      
      const { startDate, endDate } = getDateRangeBounds(range);
      const filteredUsers = usersTimeSeries.filter((point: UsersTimeSeriesPoint) => {
        const [year, month, day] = point.date.split('-').map(Number);
        const pointDate = new Date(year, month - 1, day);
        pointDate.setHours(0, 0, 0, 0);
        return pointDate >= startDate && pointDate <= endDate;
      });
      
    
      if (filteredUsers.length > 0) {
        filteredUsers.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA.getTime() - dateB.getTime();
        });
        const earliestUsers = filteredUsers[0];
        resolve({
          total: earliestUsers.total,
          active: earliestUsers.active,
          inactive: earliestUsers.inactive
        });
      } else {
        resolve(mockDashboardData.users);
      }
    }, 300);
  });
};
