/**
 * i18n 国际化配置系统
 * 支持多语言切换，默认语言为中文
 */

export type Locale = "zh" | "en"

export const defaultLocale: Locale = "zh"

export const locales: Locale[] = ["zh", "en"]

export const localeNames: Record<Locale, string> = {
  zh: "中文",
  en: "English",
}

/**
 * 翻译字典类型定义
 */
export interface Translations {
  // 导航栏
  nav: {
    services: string
    testimonials: string
    pricing: string
    contact: string
  }
  // 首页 Hero 区域
  hero: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    badge1: string
    badge2: string
  }
  // 问题与解决方案
  problemSolution: {
    problemTitle: string
    problem1: string
    problem2: string
    problem3: string
    problem4: string
    solutionTitle: string
    solution1: string
    solution2: string
    solution3: string
    solution4: string
  }
  // 服务
  services: {
    title: string
    subtitle: string
    chatbot: {
      name: string
      description: string
      cta: string
    }
    workflow: {
      name: string
      description: string
      cta: string
    }
    integration: {
      name: string
      description: string
      cta: string
    }
    analytics: {
      name: string
      description: string
      cta: string
    }
    custom: {
      name: string
      description: string
      cta: string
    }
  }
  // 客户评价
  testimonials: {
    title: string
    testimonial1: {
      content: string
      name: string
      title: string
    }
    testimonial2: {
      content: string
      name: string
      title: string
    }
    testimonial3: {
      content: string
      name: string
      title: string
    }
  }
  // 数据指标
  metrics: {
    title: string
    subtitle: string
    timeSaved: string
    roi: string
    conversion: string
    support: string
  }
  // 定价
  pricing: {
    title: string
    description: string
    starter: {
      name: string
      description: string
      buttonText: string
      features: string[]
    }
    professional: {
      name: string
      description: string
      buttonText: string
      features: string[]
    }
    enterprise: {
      name: string
      description: string
      buttonText: string
      features: string[]
    }
  }
  // 流程
  process: {
    title: string
    subtitle: string
    step1: {
      title: string
      description: string
    }
    step2: {
      title: string
      description: string
    }
    step3: {
      title: string
      description: string
    }
  }
  // CTA 区域
  cta: {
    title: string
    buttonPrimary: string
    buttonSecondary: string
  }
  // 页脚
  footer: {
    description: string
    servicesTitle: string
    companyTitle: string
    contactTitle: string
    aboutUs: string
    caseStudies: string
    blog: string
    careers: string
    contact: string
    email: string
    phone: string
    address: string
    copyright: string
    privacy: string
    terms: string
  }
}

/**
 * 中文翻译
 */
export const zhTranslations: Translations = {
  nav: {
    services: "服务",
    testimonials: "客户评价",
    pricing: "定价",
    contact: "联系我们",
  },
  hero: {
    title: "AI 驱动业绩增长，降低运营成本",
    subtitle:
      "我们帮助企业自动化工作流程，构建智能聊天机器人，集成 7×24 小时工作的 AI 代理，提升生产力并推动业务增长。",
    ctaPrimary: "预约免费咨询",
    ctaSecondary: "查看案例研究",
    badge1: "无设置费用",
    badge2: "30 天投资回报保证",
  },
  problemSolution: {
    problemTitle: "还在手动管理一切？",
    problem1: "在重复性任务上花费大量时间，而这些任务本可以自动化",
    problem2: "因无法 7×24 小时响应咨询而错失潜在客户",
    problem3: "在不增加人员的情况下难以扩展运营规模",
    problem4: "在 AI 驱动的竞争对手面前失去竞争优势",
    solutionTitle: "我们构建真正有效的 AI 解决方案",
    solution1: "定制 AI 代理，即时处理客户咨询",
    solution2: "工作流自动化，每周节省 20+ 小时",
    solution3: "与现有工具和系统无缝集成",
    solution4: "实施后 30 天内实现可证明的投资回报",
  },
  services: {
    title: "我们的 AI 解决方案",
    subtitle: "全面的 AI 服务，旨在转型您的业务运营",
    chatbot: {
      name: "AI 聊天机器人与虚拟助手",
      description: "智能对话代理，通过自然语言处理 7×24 小时处理客户支持、潜在客户筛选和销售咨询。",
      cta: "了解更多",
    },
    workflow: {
      name: "工作流自动化",
      description: "简化重复流程，通过智能自动化系统消除手动任务，每周节省 20+ 小时。",
      cta: "了解更多",
    },
    integration: {
      name: "AI 集成服务",
      description: "通过自定义 API 将 AI 功能无缝集成到您现有的电子商务和企业系统中。",
      cta: "了解更多",
    },
    analytics: {
      name: "智能分析与洞察",
      description: "AI 驱动的分析，提供可操作的洞察和预测智能，助力更好的决策。",
      cta: "了解更多",
    },
    custom: {
      name: "定制 AI 开发",
      description: "量身定制的 AI 解决方案，满足您独特的业务需求，从机器学习模型到智能自动化系统。",
      cta: "了解更多",
    },
  },
  testimonials: {
    title: "受到成长型企业的信赖",
    testimonial1: {
      content:
        "AI 聊天机器人使我们的潜在客户转化率提高了 200%，并自动处理 90% 的客户咨询。第一个月就看到了明显的投资回报。",
      name: "Sarah Johnson",
      title: "CEO，TechStart Solutions",
    },
    testimonial2: {
      content: "工作流自动化每周为我们节省了 25 小时。我们的团队现在可以专注于战略增长，而不是重复性任务。",
      name: "Michael Chen",
      title: "运营总监，GrowthCorp",
    },
    testimonial3: {
      content: "AI 集成改变了我们的电子商务平台。通过个性化客户体验，销售额增长了 180%。",
      name: "Emily Rodriguez",
      title: "创始人，RetailMax",
    },
  },
  metrics: {
    title: "可衡量的重要成果",
    subtitle: "我们的客户看到了对其业务底线的即时影响",
    timeSaved: "手动任务节省时间",
    roi: "6 个月内平均投资回报率",
    conversion: "潜在客户转化率提升",
    support: "自动化客户支持",
  },
  pricing: {
    title: "选择您的 AI 转型计划",
    description: "灵活的定价方案，随您的业务增长而扩展\n所有计划包含设置、培训和 30 天退款保证",
    starter: {
      name: "入门版",
      description: "适合开始 AI 之旅的小型企业",
      buttonText: "开始免费试用",
      features: [
        "客户支持 AI 聊天机器人",
        "基础工作流自动化（3 个流程）",
        "电子邮件集成",
        "标准分析仪表板",
        "电子邮件支持",
        "30 天退款保证",
      ],
    },
    professional: {
      name: "专业版",
      description: "适合准备通过 AI 扩展的成长型企业",
      buttonText: "立即开始",
      features: [
        "高级 AI 聊天机器人与潜在客户筛选",
        "完整工作流自动化（10+ 流程）",
        "CRM 与电子商务集成",
        "高级分析与报告",
        "优先电话与电子邮件支持",
        "定制 AI 训练",
        "每月优化咨询",
        "ROI 跟踪与报告",
      ],
    },
    enterprise: {
      name: "企业版",
      description: "为大型组织提供完整的 AI 转型",
      buttonText: "联系销售",
      features: [
        "定制 AI 开发与部署",
        "无限工作流自动化",
        "完整系统集成",
        "专属 AI 策略师",
        "7×24 小时优先支持",
        "高级安全与合规",
        "白标解决方案",
        "季度业务审查",
        "定制培训与研讨会",
      ],
    },
  },
  process: {
    title: "简单的三步流程",
    subtitle: "从咨询到实施，我们让 AI 采用变得无缝",
    step1: {
      title: "预约咨询",
      description: "安排免费咨询，讨论您的业务需求并识别自动化机会",
    },
    step2: {
      title: "AI 策略",
      description: "我们分析您的工作流程，创建针对您特定业务目标的定制 AI 策略",
    },
    step3: {
      title: "实施",
      description: "我们的团队构建、测试和部署您的 AI 解决方案，提供持续支持和优化",
    },
  },
  cta: {
    title: "准备好用 AI 降低成本了吗？",
    buttonPrimary: "预约免费咨询",
    buttonSecondary: "致电 (555) 123-4567",
  },
  footer: {
    description: "通过智能自动化和前沿 AI 集成解决方案转型企业。",
    servicesTitle: "服务",
    companyTitle: "公司",
    contactTitle: "联系我们",
    aboutUs: "关于我们",
    caseStudies: "案例研究",
    blog: "博客",
    careers: "招聘",
    contact: "联系",
    email: "hello@aiagency.com",
    phone: "(555) 123-4567",
    address: "123 AI Street, Tech City",
    copyright: "© 2025 AI Agency. 保留所有权利。",
    privacy: "隐私政策",
    terms: "服务条款",
  },
}

/**
 * 英文翻译
 */
export const enTranslations: Translations = {
  nav: {
    services: "Services",
    testimonials: "Testimonials",
    pricing: "Pricing",
    contact: "Contact",
  },
  hero: {
    title: "Results and Costs Reduced by AI",
    subtitle:
      "We help businesses automate workflows, build intelligent chatbots, and integrate AI agents that work 24/7 to boost productivity and drive growth.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "View Case Studies",
    badge1: "No Setup Fees",
    badge2: "30-Day ROI Guarantee",
  },
  problemSolution: {
    problemTitle: "Still Managing Everything Manually?",
    problem1: "Spending hours on repetitive tasks that could be automated",
    problem2: "Missing leads because you can't respond to inquiries 24/7",
    problem3: "Struggling to scale operations without hiring more staff",
    problem4: "Losing competitive edge to AI-powered competitors",
    solutionTitle: "We Build AI Solutions That Work",
    solution1: "Custom AI agents that handle customer inquiries instantly",
    solution2: "Workflow automation that saves 20+ hours per week",
    solution3: "Seamless integration with your existing tools and systems",
    solution4: "Proven ROI within 30 days of implementation",
  },
  services: {
    title: "Our AI Solutions",
    subtitle: "Comprehensive AI services designed to transform your business operations",
    chatbot: {
      name: "AI Chatbots & Virtual Assistants",
      description:
        "Intelligent conversational agents that handle customer support, lead qualification, and sales inquiries 24/7 with natural language processing.",
      cta: "Learn more",
    },
    workflow: {
      name: "Workflow Automation",
      description:
        "Streamline repetitive processes and eliminate manual tasks with intelligent automation systems that save 20+ hours per week.",
      cta: "Learn more",
    },
    integration: {
      name: "AI Integration Services",
      description:
        "Seamlessly integrate AI capabilities into your existing e-commerce and enterprise systems with custom APIs.",
      cta: "Learn more",
    },
    analytics: {
      name: "Smart Analytics & Insights",
      description:
        "AI-powered analytics that provide actionable insights and predictive intelligence for better decision making.",
      cta: "Learn more",
    },
    custom: {
      name: "Custom AI Development",
      description:
        "Bespoke AI solutions tailored to your unique business needs, from machine learning models to intelligent automation systems.",
      cta: "Learn more",
    },
  },
  testimonials: {
    title: "Trusted by Growing Businesses",
    testimonial1: {
      content:
        "The AI chatbot increased our lead conversion by 200% and handles 90% of customer inquiries automatically. ROI was evident within the first month.",
      name: "Sarah Johnson",
      title: "CEO, TechStart Solutions",
    },
    testimonial2: {
      content:
        "Workflow automation saved us 25 hours per week. Our team can now focus on strategic growth instead of repetitive tasks.",
      name: "Michael Chen",
      title: "Operations Director, GrowthCorp",
    },
    testimonial3: {
      content:
        "The AI integration transformed our e-commerce platform. Sales increased by 180% with personalized customer experiences.",
      name: "Emily Rodriguez",
      title: "Founder, RetailMax",
    },
  },
  metrics: {
    title: "Measurable Results That Matter",
    subtitle: "Our clients see immediate impact on their bottom line",
    timeSaved: "Time Saved on Manual Tasks",
    roi: "Average ROI Within 6 Months",
    conversion: "Increase in Lead Conversion",
    support: "Automated Customer Support",
  },
  pricing: {
    title: "Choose Your AI Transformation Plan",
    description:
      "Flexible pricing designed to scale with your business growth\nAll plans include setup, training, and 30-day money-back guarantee",
    starter: {
      name: "Starter",
      description: "Perfect for small businesses starting their AI journey",
      buttonText: "Start Free Trial",
      features: [
        "AI Chatbot for customer support",
        "Basic workflow automation (3 processes)",
        "Email integration",
        "Standard analytics dashboard",
        "Email support",
        "30-day money-back guarantee",
      ],
    },
    professional: {
      name: "Professional",
      description: "Ideal for growing businesses ready to scale with AI",
      buttonText: "Get Started",
      features: [
        "Advanced AI chatbot with lead qualification",
        "Complete workflow automation (10+ processes)",
        "CRM & e-commerce integrations",
        "Advanced analytics & reporting",
        "Priority phone & email support",
        "Custom AI training",
        "Monthly optimization calls",
        "ROI tracking & reporting",
      ],
    },
    enterprise: {
      name: "Enterprise",
      description: "Complete AI transformation for large organizations",
      buttonText: "Contact Sales",
      features: [
        "Custom AI development & deployment",
        "Unlimited workflow automation",
        "Full system integrations",
        "Dedicated AI strategist",
        "24/7 priority support",
        "Advanced security & compliance",
        "White-label solutions",
        "Quarterly business reviews",
        "Custom training & workshops",
      ],
    },
  },
  process: {
    title: "Simple 3-Step Process",
    subtitle: "From consultation to implementation, we make AI adoption seamless",
    step1: {
      title: "Book a Call",
      description: "Schedule a free consultation to discuss your business needs and identify automation opportunities",
    },
    step2: {
      title: "AI Strategy",
      description: "We analyze your workflows and create a custom AI strategy tailored to your specific business goals",
    },
    step3: {
      title: "Implementation",
      description: "Our team builds, tests, and deploys your AI solutions with ongoing support and optimization",
    },
  },
  cta: {
    title: "Ready to cut costs with AI?",
    buttonPrimary: "Book Free Consultation",
    buttonSecondary: "Call (555) 123-4567",
  },
  footer: {
    description: "Transforming businesses through intelligent automation and cutting-edge AI integration solutions.",
    servicesTitle: "Services",
    companyTitle: "Company",
    contactTitle: "Get in Touch",
    aboutUs: "About Us",
    caseStudies: "Case Studies",
    blog: "Blog",
    careers: "Careers",
    contact: "Contact",
    email: "hello@aiagency.com",
    phone: "(555) 123-4567",
    address: "123 AI Street, Tech City",
    copyright: "© 2025 AI Agency. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
}

/**
 * 翻译字典
 */
export const translations: Record<Locale, Translations> = {
  zh: zhTranslations,
  en: enTranslations,
}

/**
 * 获取翻译文本
 */
export function getTranslations(locale: Locale = defaultLocale): Translations {
  return translations[locale] || translations[defaultLocale]
}
