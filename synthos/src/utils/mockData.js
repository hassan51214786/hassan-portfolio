export const timeSeriesData = Array.from({ length: 24 }).map((_, i) => ({
  time: `${i}:00`,
  latency: Math.floor(Math.random() * 50) + 20,
  traffic: Math.floor(Math.random() * 500) + 100,
  errors: Math.floor(Math.random() * 10),
}));

export const systemLogs = [
  { id: 1, type: 'CRITICAL', message: 'Main database node unresponsive.', timestamp: '14:02:11' },
  { id: 2, type: 'INFO', message: 'Worker node scaled up.', timestamp: '14:01:45' },
  { id: 3, type: 'WARNING', message: 'High memory usage detected on auth service.', timestamp: '13:58:20' },
  { id: 4, type: 'INFO', message: 'Cache cleared manually.', timestamp: '13:55:01' },
  { id: 5, type: 'INFO', message: 'Deploy successful: v1.4.2.', timestamp: '13:42:09' },
  { id: 6, type: 'WARNING', message: 'Rate limit threshold approaching for IP 192.168.1.5', timestamp: '13:30:15' },
];

export const coreMetrics = {
  cpu: 78,
  memory: 92,
  network: 45,
  uptime: '99.99%',
};
