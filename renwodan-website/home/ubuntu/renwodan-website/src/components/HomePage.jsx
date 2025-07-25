import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Globe, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';
import visualConcept1 from '../assets/visual_concept_1.png';

const HomePage = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "同心共營",
      description: "理念一致、信任為基，所有參與者共同經營這個平台"
    },
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "全域同行",
      description: "橫向串聯各區域、縱向連結每一角色，共同成長"
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "在地溫度",
      description: "從埔里開始，用溫度與真誠打造在地外送服務"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "透明公平",
      description: "免月租、低抽成、利潤透明，讓每個參與者都受益"
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  <span className="text-primary">同心共營</span>
                  <br />
                  <span className="text-secondary">全域同行</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  我們不是外來者，是與你同行者。從埔里開始，用實踐與堅持，寫下屬於台灣自己的外送故事。
                </p>
              </motion.div>
              
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link to="/join">
                    立即加入
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/story">了解我們的故事</Link>
                </Button>
              </motion.div>

              <motion.div className="grid grid-cols-3 gap-8 pt-8" variants={itemVariants}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">合作店家</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">外送夥伴</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">1000+</div>
                  <div className="text-sm text-muted-foreground">滿意顧客</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img 
                src={visualConcept1} 
                alt="任我點即時送 - 同心共營的理念" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">任</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              我們的核心價值
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              任我點即時送致力於打造一個對所有參與者都友善、透明、有價值的平台
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              準備好與我們一起改變外送生態了嗎？
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              無論您是店家、外送員還是消費者，我們都歡迎您加入這個溫暖的大家庭
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link to="/join">店家加盟</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/delivery">成為外送員</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

