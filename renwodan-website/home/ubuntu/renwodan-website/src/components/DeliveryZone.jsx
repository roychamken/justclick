import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Shield,
  DollarSign,
  Clock,
  Users,
  Heart,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import visualConcept3 from '../assets/visual_concept_3.png';

const DeliveryZone = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "透明收入",
      description: "低抽成、無隱藏費用，讓您的每一份努力都有相應的回報"
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "完整保障",
      description: "提供意外險、設備補助，讓您安心工作無後顧之憂"
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "彈性時間",
      description: "自由安排工作時間，兼職全職都歡迎"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "夥伴支持",
      description: "加入溫暖的外送員社群，互相支持成長"
    },
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "尊嚴工作",
      description: "我們重視每一位外送員，您不只是接單者，更是平台的共創者"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "成長機會",
      description: "提供培訓課程、職涯發展機會，與平台一起成長"
    }
  ];

  const requirements = [
    "年滿18歲，具備合法工作資格",
    "擁有機車駕照及自備交通工具",
    "具備智慧型手機及基本操作能力",
    "良好的服務態度與溝通能力",
    "願意遵守平台規範與服務標準"
  ];

  const steps = [
    {
      step: "1",
      title: "線上申請",
      description: "填寫基本資料並上傳相關證件"
    },
    {
      step: "2",
      title: "資格審核",
      description: "我們會在3個工作天內完成審核"
    },
    {
      step: "3",
      title: "教育訓練",
      description: "參加線上或實體的新手訓練課程"
    },
    {
      step: "4",
      title: "開始接單",
      description: "完成訓練後即可開始接單賺取收入"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="mb-4">外送員專區</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            成為我們的外送夥伴
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            在任我點即時送，外送員不只是接單者，更是平台的參與者與共創者。
            我們重視您的價值，提供有尊嚴的工作環境。
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img 
            src={visualConcept3} 
            alt="外送員專區 - 支持外送員、公平對待、壯大社團" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            為什麼選擇任我點？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements & Process */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Requirements */}
          <motion.div variants={itemVariants}>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">加入條件</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Process */}
          <motion.div variants={itemVariants}>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">加入流程</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Income Example */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">收入試算</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">兼職</div>
                <div className="text-sm text-muted-foreground mb-4">每天2-3小時</div>
                <div className="text-3xl font-bold text-foreground">$8,000</div>
                <div className="text-sm text-muted-foreground">每月預估收入</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-primary">
                <div className="text-2xl font-bold text-primary mb-2">半職</div>
                <div className="text-sm text-muted-foreground mb-4">每天4-6小時</div>
                <div className="text-3xl font-bold text-foreground">$18,000</div>
                <div className="text-sm text-muted-foreground">每月預估收入</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-primary mb-2">全職</div>
                <div className="text-sm text-muted-foreground mb-4">每天8小時</div>
                <div className="text-3xl font-bold text-foreground">$35,000</div>
                <div className="text-sm text-muted-foreground">每月預估收入</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              *以上為預估收入，實際收入會因工作時間、接單量、區域等因素而有所不同
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-foreground">
            準備好加入我們了嗎？
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            成為任我點即時送的外送夥伴，享受有尊嚴的工作環境，與我們一起成長
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/join?tab=delivery">
                立即申請加入
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              了解更多詳情
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DeliveryZone;

