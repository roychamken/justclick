import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Camera, Bike, Coffee, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import visualConcept2 from '../assets/visual_concept_2.png';

const BrandStory = () => {
  const founders = [
    {
      name: "雯娟",
      role: "創辦人",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "國小老師，相信改變社會不一定要轟轟烈烈，有時只要一個對的起點，一份堅定的信念。",
      quote: "如果我們能用自己的方式打造平台，回到本地主導的經營模式，是不是店家能留住更多收入，騎士能有更多尊嚴？"
    },
    {
      name: "孟莉",
      role: "理念夥伴",
      icon: <Camera className="w-6 h-6" />,
      description: "50年老照相館老闆娘，見證時代變遷，也看見產業失衡，她決定站出來，支持這場改變。"
    },
    {
      name: "相義",
      role: "理念夥伴",
      icon: <Bike className="w-6 h-6" />,
      description: "全職外送員，最了解騎士的辛苦，他希望騎士不只是接單者，更是平台的參與者與共創者。"
    },
    {
      name: "祥裕",
      role: "理念夥伴",
      icon: <Coffee className="w-6 h-6" />,
      description: "早餐店老闆，每天清晨三點就開始備料。",
      quote: "如果我們能少被抽一點，收入就能多一點。"
    },
    {
      name: "熾華",
      role: "理念夥伴",
      icon: <Briefcase className="w-6 h-6" />,
      description: "在高雄打拚的保險業務員，他雖不在埔里，卻用行動與資源支持這個來自家鄉的夢。"
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
          <Badge variant="outline" className="mb-4">品牌故事</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            從埔里開始的溫暖故事
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            在這座熟悉的小鎮裡，一份簡單卻真摯的理想，正在慢慢發芽，綻放出屬於我們的希望。
          </p>
        </motion.div>

        {/* Story Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-foreground">起源於信念</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                在外送平台競爭激烈、規則往往傾向資本與規模的今天，我們知道自己無法和大平台拼資源、拼聲量，
                但我們相信，有沒有溫度、有沒有在地心，才是更重要的事。
              </p>
              <p>
                所以我們選擇了一條踏實而真誠的路，也是一條想和大家一起走的路——
                一條相信彼此、願意分享、一起努力打造的共營之路。
              </p>
              <p>
                這一切，起於埔里。
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img 
              src={visualConcept2} 
              alt="全域同行的理念" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Founders Section */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">創辦團隊</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {founder.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{founder.name}</h3>
                        <Badge variant="secondary" className="text-xs">{founder.role}</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{founder.description}</p>
                    {founder.quote && (
                      <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-muted-foreground">
                        "{founder.quote}"
                      </blockquote>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">我們的使命</h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
              <p>
                我們沒有行銷預算，但有熱血；沒有巨額投資，但有信任。
                每一張送到店家手中的DM，不只是宣傳，更是一份邀請，一次誠懇地對話，讓理想在在地悄悄發芽。
              </p>
              <p>
                我們被拒絕過，但也一次次被感動、被支持的眼神所回報。
                而這些努力，終於匯聚成 <strong className="text-primary">任我點即時送</strong> 這個名字。
              </p>
              <p className="text-xl font-semibold text-primary">
                我們相信：「同心共營，全域同行」不只是口號，而是行動的本質。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-foreground">我們不是外來平台</h3>
            <p className="text-muted-foreground">
              我們是店家與外送員的共同平台。我們不只是賺錢工具，我們是在地價值的延伸。
            </p>
          </motion.div>
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-foreground">從埔里到全台</h3>
            <p className="text-muted-foreground">
              從一城到一縣，從一區到全域，改變一點一點擴散，市場一家一家壯大。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandStory;

