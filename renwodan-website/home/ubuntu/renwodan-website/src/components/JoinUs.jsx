import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Store, 
  Bike, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  Users
} from 'lucide-react';

const JoinUs = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('store');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    storeName: '',
    address: '',
    message: ''
  });

  // 檢查URL參數來設定預設tab
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    if (tab === 'delivery') {
      setActiveTab('delivery');
      // 滾動到頁面頂部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡可以添加表單提交邏輯
    console.log('Form submitted:', formData);
    alert('感謝您的申請！我們會盡快與您聯繫。');
  };

  const storeSteps = [
    "填寫店家基本資料",
    "上傳營業登記證等相關文件",
    "平台審核（3-5個工作天）",
    "簽署合作協議",
    "系統教育訓練",
    "正式上線營運"
  ];

  const deliverySteps = [
    "填寫個人基本資料",
    "上傳身分證、駕照等證件",
    "資格審核（3個工作天）",
    "參加新手訓練課程",
    "下載APP並完成設定",
    "開始接單賺取收入"
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "客服專線",
      value: "0800-123-456",
      description: "週一至週日 09:00-21:00"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "電子信箱",
      value: "contact@renwodan.tw",
      description: "24小時內回覆"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "服務據點",
      value: "南投縣埔里鎮",
      description: "逐步擴展至全台"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">加入我們</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            一起打造更好的外送生態
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            無論您是店家還是外送員，我們都歡迎您加入任我點即時送的大家庭，
            一起實現「同心共營，全域同行」的理念
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('store')}
              className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center space-x-2 ${
                activeTab === 'store'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Store className="w-5 h-5" />
              <span>店家加盟</span>
            </button>
            <button
              onClick={() => setActiveTab('delivery')}
              className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center space-x-2 ${
                activeTab === 'delivery'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Bike className="w-5 h-5" />
              <span>外送員招募</span>
            </button>
          </div>
        </div>

        {/* Store Tab Content */}
        {activeTab === 'store' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Store Benefits */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">店家加盟優勢</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">零月租費</h3>
                    <p className="text-muted-foreground">無需支付月租費用，大幅降低營運成本</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">業界最低抽成</h3>
                    <p className="text-muted-foreground">僅收取15%抽成，讓您保留更多利潤</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">每日結算</h3>
                    <p className="text-muted-foreground">快速結算，改善現金流</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">在地支援</h3>
                    <p className="text-muted-foreground">專人服務，深度了解在地需求</p>
                  </div>
                </div>
              </div>

              {/* Store Process */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">加盟流程</h3>
                <div className="space-y-3">
                  {storeSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Store Application Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">店家加盟申請</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        聯絡人姓名 *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="請輸入聯絡人姓名"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        聯絡電話 *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="請輸入聯絡電話"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      電子信箱 *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="請輸入電子信箱"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      店家名稱 *
                    </label>
                    <Input
                      name="storeName"
                      value={formData.storeName}
                      onChange={handleInputChange}
                      placeholder="請輸入店家名稱"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      店家地址 *
                    </label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="請輸入店家地址"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      其他說明
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="請告訴我們您的需求或問題"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    提交申請
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Delivery Tab Content */}
        {activeTab === 'delivery' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Delivery Benefits */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground">外送員福利</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">彈性工時</h3>
                    <p className="text-muted-foreground">自由安排工作時間，兼職全職都歡迎</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">透明收入</h3>
                    <p className="text-muted-foreground">低抽成、無隱藏費用，收入透明公開</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">完整保障</h3>
                    <p className="text-muted-foreground">提供意外險及設備補助</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">社群支持</h3>
                    <p className="text-muted-foreground">加入溫暖的外送員社群</p>
                  </div>
                </div>
              </div>

              {/* Delivery Process */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">加入流程</h3>
                <div className="space-y-3">
                  {deliverySteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Delivery Application Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">外送員申請</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        姓名 *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="請輸入姓名"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        聯絡電話 *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="請輸入聯絡電話"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      電子信箱 *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="請輸入電子信箱"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      居住地址 *
                    </label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="請輸入居住地址"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      自我介紹
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="請簡單介紹自己的工作經驗或動機"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    提交申請
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">聯絡我們</h2>
            <p className="text-xl text-muted-foreground">
              有任何問題嗎？我們的團隊隨時為您服務
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                  <p className="text-lg font-medium text-primary">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

