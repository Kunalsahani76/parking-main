const siteUrl = 'https://www.theparkingadvisor.com'

export const serviceSeo = {
  services: {
    title: 'Parking Consulting Services | Parking Design & Optimization',
    description:
      'Explore parking consulting services including parking design, feasibility studies, traffic circulation planning, parking optimization, and compliance advisory.',
    path: '/services',
    keywords:
      'parking consulting services, parking design consultant, parking optimization services, parking feasibility study, traffic circulation planning, parking compliance advisory, parking consultant India',
  },
  trafficFlow: {
    title: 'Traffic Flow & Circulation Planning Consultant | The Parking Advisor',
    description:
      'Expert traffic flow and circulation planning solutions for commercial, residential, and mixed-use developments. Improve vehicle movement, reduce congestion, and optimize parking efficiency.',
    path: '/services/traffic-flow-circulation-planning',
    keywords:
      'traffic flow planning, circulation planning, vehicle circulation consultant, traffic consultant, parking circulation design, traffic movement planning, parking traffic consultant',
  },
  smartAutomatedParking: {
    title: 'Smart & Automated Parking Solutions | The Parking Advisor',
    description:
      'Advanced smart and automated parking solutions including intelligent parking systems, automation technologies, access control, and parking optimization strategies.',
    path: '/services/smart-automated-parking',
    keywords:
      'smart parking solutions, automated parking systems, intelligent parking management, automated parking consultant, smart parking technology, parking automation',
  },
  governmentCompliance: {
    title: 'Government & Compliance Advisory Services | The Parking Advisor',
    description:
      'Professional government and compliance advisory services for approval-ready parking planning, regulatory compliance, fire safety, accessibility standards, and authority approvals.',
    path: '/services/government-compliance-advisory',
    keywords:
      'parking compliance consultant, government approval advisory, parking regulations consultant, approval ready planning, fire safety compliance, parking consultant India',
  },
  multilevelBasement: {
    title: 'Multi-Level & Basement Parking Design Consultant | The Parking Advisor',
    description:
      'Specialized multi-level and basement parking design services including ramp planning, space optimization, fire safety, ventilation, and circulation management.',
    path: '/services/multilevel-basement-parking-design',
    keywords:
      'multi-level parking design, basement parking consultant, parking layout design, ramp design consultant, parking structure planning, parking designer India',
  },
  revenueEfficiency: {
    title: 'Parking Revenue & Efficiency Enhancement Services | The Parking Advisor',
    description:
      'Maximize parking revenue and operational efficiency with strategic parking optimization, utilization planning, analytics, and revenue enhancement solutions.',
    path: '/services/parking-revenue-efficiency-enhancement',
    keywords:
      'parking revenue enhancement, parking efficiency consultant, parking optimization services, parking utilization strategy, parking management consultant, parking revenue audit',
  },
}

export function withServiceOpenGraph(seo, openGraph = {}) {
  return {
    ...seo,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteUrl}${seo.path}`,
      type: 'website',
      ...openGraph,
    },
  }
}
