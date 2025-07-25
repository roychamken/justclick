import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Store, 
  Bike, 
  Users, 
  MapPin,
  DollarSign,
  Shield,
  Clock,
  Heart,
  CheckCircle,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const storeFeatures = [
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "免月租費",
      description: "無需支付月租費用，降低營運成本"
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "低抽成",
      description: "業界最低抽成比例，讓店家保留更多利潤"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "透明收費",
      description: "所有費用透明公開，無隱藏收費"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "快速結算",
      description: "每日結算，資金週轉更靈活"
    }
  ];

  const deliveryFeatures = [
    {
      icon: <Heart className="w-6 h-6 text-secondary" />,
      title: "尊嚴工作",
      description: "重視外送員價值，提供有尊嚴的工作環境"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-secondary" />,
      title: "合理報酬",
      description: "透明計價，確保每份努力都有相應回報"
    },
    {
      icon: <Shield className="w-6 h-6 text-secondary" />,
      title: "完整保障",
      description: "提供意外險及設備補助"
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "社群支持",
      description: "建立外送員社群，互相支持成長"
    }
  ];

  const customerFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "準時送達",
      description: "承諾準時送達，讓您安心等待"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "品質保證",
      description: "嚴格把關食品安全與送餐品質"
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: "貼心服務",
      description: "在地化服務，更了解您的需求"
    },
    {
      icon: <Star className="w-6 h-6 text-accent" />,
      title: "優質體驗",
      description: "簡潔易用的APP介面，訂餐更便利"
    }
  ];

  const communityBenefits = [
    "支持在地店家，促進區域經濟發展",
    "創造就業機會，提升社區活力",
    "建立信任網絡，強化社區連結",
    "推動數位轉型，協助傳統店家升級",
    "環保配送，減少碳足跡",
    "公益合作，回饋社會"
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
          <Badge variant="outline" className="mb-4">服務特色</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            三方共好的服務承諾
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            任我點即時送致力於打造一個對店家友善、對外送員尊重、對消費者貼心、對社區有益的平台
          </p>
        </motion.div>

        {/* Store Features */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <Store className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">對店家的承諾</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storeFeatures.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-primary/20">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Delivery Features */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <Bike className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold text-foreground">對外送員的保障</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryFeatures.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-secondary/20">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Features */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-accent" />
              <h2 className="text-3xl font-bold text-foreground">對消費者的服務</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerFeatures.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-accent/20">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Impact */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 lg:p-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">對社區的貢獻</h2>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              我們不只是外送平台，更是每個在地社區支持與共好的力量來源
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityBenefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="flex items-start space-x-3 bg-white/50 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-4xl font-bold text-primary mb-2">15%</div>
            <div className="text-muted-foreground">業界最低抽成</div>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-4xl font-bold text-secondary mb-2">24小時</div>
            <div className="text-muted-foreground">快速結算週期</div>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-4xl font-bold text-accent mb-2">30分鐘</div>
            <div className="text-muted-foreground">平均送達時間</div>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">客戶滿意度</div>
          </motion.div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">與傳統平台比較</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-4">項目</th>
                      <th className="text-center py-4 px-4 text-primary font-bold">任我點即時送</th>
                      <th className="text-center py-4 px-4 text-muted-foreground">傳統平台</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-4">月租費</td>
                      <td className="text-center py-4 px-4 text-primary font-semibold">免費</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">$2,000-5,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">抽成比例</td>
                      <td className="text-center py-4 px-4 text-primary font-semibold">15%</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">25-35%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">結算週期</td>
                      <td className="text-center py-4 px-4 text-primary font-semibold">每日</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">每週/每月</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-4">客服支援</td>
                      <td className="text-center py-4 px-4 text-primary font-semibold">在地專人</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">線上客服</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">社區連結</td>
                      <td className="text-center py-4 px-4 text-primary font-semibold">深度在地化</td>
                      <td className="text-center py-4 px-4 text-muted-foreground">標準化服務</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

