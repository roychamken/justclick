import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">任</span>
              </div>
              <span className="text-xl font-bold text-foreground">任我點即時送</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              同心共營，全域同行。我們不是外來者，是與你同行者。
              從埔里開始，用實踐與堅持，寫下屬於台灣自己的外送故事。
            </p>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Taiwan</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li><Link to="/story" className="text-muted-foreground hover:text-primary transition-colors">品牌故事</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">服務特色</Link></li>
              <li><Link to="/delivery" className="text-muted-foreground hover:text-primary transition-colors">外送員專區</Link></li>
              <li><Link to="/join" className="text-muted-foreground hover:text-primary transition-colors">加入我們</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">聯絡我們</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>南投縣埔里鎮</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>0800-123-456</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@renwodan.tw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 任我點即時送. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

