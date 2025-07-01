// LearningPage.tsx - Educational content for stocks, futures, and options
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  TrendingUp, 
  Target, 
  Shield, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Info,
  Play,
  FileText,
  Users,
  Award
} from 'lucide-react';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon: any;
  sections: LearningSection[];
}

interface LearningSection {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  examples?: string[];
  risks?: string[];
}

const LearningPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeModule, setActiveModule] = useState<string>('stocks');
  const [activeSection, setActiveSection] = useState<string>('');

  const learningModules: LearningModule[] = [
    {
      id: 'stocks',
      title: 'Stocks & Equity Investing',
      description: 'Learn the fundamentals of stock market investing',
      difficulty: 'Beginner',
      duration: '30 min',
      icon: TrendingUp,
      sections: [
        {
          id: 'what-are-stocks',
          title: 'What Are Stocks?',
          content: 'Stocks represent ownership shares in a company. When you buy stock, you become a shareholder and own a piece of that business. Companies issue stocks to raise capital for growth, expansion, or operations.',
          keyPoints: [
            'Stocks represent partial ownership in companies',
            'Shareholders have voting rights and may receive dividends',
            'Stock prices fluctuate based on company performance and market conditions',
            'Two main types: Common stocks and Preferred stocks'
          ],
          examples: [
            'If Apple has 1 billion shares and you own 100 shares, you own 0.00001% of Apple',
            'Coca-Cola pays quarterly dividends to shareholders',
            'Tesla stock price varies based on electric vehicle market trends'
          ]
        },
        {
          id: 'stock-valuation',
          title: 'Stock Valuation Basics',
          content: 'Understanding how to evaluate whether a stock is fairly priced is crucial for successful investing. Key metrics include P/E ratio, P/B ratio, and dividend yield.',
          keyPoints: [
            'P/E Ratio: Price divided by earnings per share',
            'P/B Ratio: Price divided by book value per share',
            'Market Cap: Total value of all company shares',
            'Dividend Yield: Annual dividend divided by stock price'
          ],
          examples: [
            'A P/E ratio of 15 means investors pay $15 for every $1 of earnings',
            'High P/E ratios may indicate overvaluation or high growth expectations',
            'Dividend yield of 4% means you receive $4 annually per $100 invested'
          ]
        },
        {
          id: 'investment-strategies',
          title: 'Investment Strategies',
          content: 'Different approaches to stock investing suit different goals and risk tolerances. Common strategies include value investing, growth investing, and dividend investing.',
          keyPoints: [
            'Value Investing: Buying undervalued stocks',
            'Growth Investing: Investing in companies with high growth potential',
            'Dividend Investing: Focusing on stocks that pay regular dividends',
            'Index Investing: Buying funds that track market indices'
          ],
          examples: [
            'Warren Buffett is famous for value investing approach',
            'Amazon was a growth stock that didn\'t pay dividends for years',
            'S&P 500 index funds provide broad market exposure'
          ],
          risks: [
            'Individual stocks can lose significant value',
            'Market volatility affects all equity investments',
            'Company-specific risks like management changes or product failures'
          ]
        }
      ]
    },
    {
      id: 'futures',
      title: 'Futures Trading',
      description: 'Understanding futures contracts and commodities trading',
      difficulty: 'Intermediate',
      duration: '45 min',
      icon: Target,
      sections: [
        {
          id: 'futures-basics',
          title: 'Futures Contract Fundamentals',
          content: 'Futures are standardized contracts to buy or sell an asset at a predetermined price on a specific future date. They\'re primarily used for hedging risk or speculation.',
          keyPoints: [
            'Standardized contracts traded on exchanges',
            'Require margin deposits, not full contract value',
            'Can be settled with cash or physical delivery',
            'Used for commodities, currencies, and financial instruments'
          ],
          examples: [
            'Oil futures allow airlines to lock in fuel costs',
            'Farmers use grain futures to guarantee crop sale prices',
            'Currency futures help companies hedge foreign exchange risk'
          ]
        },
        {
          id: 'futures-mechanics',
          title: 'How Futures Trading Works',
          content: 'Futures trading involves margin requirements, daily mark-to-market settlements, and potential for significant leverage. Understanding these mechanics is crucial.',
          keyPoints: [
            'Initial margin: Deposit required to open position',
            'Maintenance margin: Minimum account balance required',
            'Mark-to-market: Daily settlement of gains/losses',
            'Leverage amplifies both gains and losses'
          ],
          examples: [
            'Control $100,000 of crude oil with $5,000 margin (20:1 leverage)',
            'Daily price movements directly affect account balance',
            'Margin calls require additional funds if losses accumulate'
          ],
          risks: [
            'High leverage can lead to substantial losses',
            'Margin calls may force position liquidation',
            'Commodity prices can be extremely volatile',
            'Contract expiration requires action (roll or settle)'
          ]
        },
        {
          id: 'futures-strategies',
          title: 'Common Futures Strategies',
          content: 'Futures can be used for hedging existing positions, speculation on price movements, or arbitrage opportunities between related markets.',
          keyPoints: [
            'Hedging: Reducing risk in existing positions',
            'Speculation: Profiting from price movements',
            'Arbitrage: Exploiting price differences',
            'Spread trading: Profiting from price relationships'
          ],
          examples: [
            'Portfolio managers hedge stock exposure with index futures',
            'Commodity traders speculate on weather affecting crop prices',
            'Calendar spreads profit from different expiration month prices'
          ],
          risks: [
            'Futures are zero-sum: someone\'s gain is another\'s loss',
            'Time decay affects some futures strategies',
            'Liquidity risk in less popular contracts'
          ]
        }
      ]
    },
    {
      id: 'options',
      title: 'Options Trading',
      description: 'Learn about options contracts and advanced strategies',
      difficulty: 'Advanced',
      duration: '60 min',
      icon: Shield,
      sections: [
        {
          id: 'options-basics',
          title: 'Options Contract Fundamentals',
          content: 'Options give the holder the right, but not obligation, to buy (call) or sell (put) an underlying asset at a specific price within a certain timeframe.',
          keyPoints: [
            'Call options: Right to buy at strike price',
            'Put options: Right to sell at strike price',
            'Premium: Cost to purchase the option',
            'Expiration date: When the option expires'
          ],
          examples: [
            'Buy a call option on Apple with $150 strike, $5 premium',
            'Option gives right to buy 100 Apple shares at $150 each',
            'Profitable if Apple trades above $155 ($150 + $5 premium)'
          ]
        },
        {
          id: 'options-pricing',
          title: 'Options Pricing Factors',
          content: 'Option prices depend on multiple factors including underlying price, strike price, time to expiration, volatility, and interest rates (Greeks).',
          keyPoints: [
            'Intrinsic value: Difference between stock price and strike',
            'Time value: Premium above intrinsic value',
            'Implied volatility: Market\'s expectation of price movement',
            'Greeks: Delta, Gamma, Theta, Vega measure sensitivities'
          ],
          examples: [
            'Delta of 0.5 means option price moves $0.50 per $1 stock move',
            'Theta shows daily time decay of option value',
            'High volatility increases option premiums'
          ]
        },
        {
          id: 'options-strategies',
          title: 'Options Trading Strategies',
          content: 'Options offer numerous strategies for different market outlooks: bullish, bearish, or neutral. Strategies range from simple buying to complex multi-leg combinations.',
          keyPoints: [
            'Long calls/puts: Directional plays with limited risk',
            'Covered calls: Income generation on stock holdings',
            'Spreads: Limited risk and reward strategies',
            'Straddles/Strangles: Volatility plays'
          ],
          examples: [
            'Covered call: Own 100 shares, sell call option for income',
            'Bull call spread: Buy lower strike call, sell higher strike call',
            'Iron condor: Profit from low volatility and range-bound movement'
          ],
          risks: [
            'Options can expire worthless (100% loss)',
            'Time decay works against option buyers',
            'Complex strategies require advanced knowledge',
            'Assignment risk for option sellers',
            'Volatility risk affects option values'
          ]
        }
      ]
    }
  ];

  const currentModule = learningModules.find(m => m.id === activeModule);
  const currentSection = currentModule?.sections.find(s => s.id === activeSection);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-900/30';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-900/30';
      case 'Advanced': return 'text-red-400 bg-red-900/30';
      default: return 'text-gray-400 bg-gray-900/30';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate(-1)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="bg-purple-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold">Learning Center</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Users className="w-4 h-4" />
                <span>10,000+ learners</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Module Selection */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Learning Modules</h2>
            <div className="space-y-3">
              {learningModules.map((module) => {
                const IconComponent = module.icon;
                return (
                  <button
                    key={module.id}
                    onClick={() => {
                      setActiveModule(module.id);
                      setActiveSection('');
                    }}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      activeModule === module.id
                        ? 'bg-blue-600 border-blue-500'
                        : 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <IconComponent className="w-6 h-6 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-medium mb-1">{module.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">{module.description}</p>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(module.difficulty)}`}>
                            {module.difficulty}
                          </span>
                          <div className="flex items-center space-x-1 text-xs text-gray-400">
                            <Clock className="w-3 h-3" />
                            <span>{module.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Progress Section */}
            <div className="mt-8 bg-gray-800 p-4 rounded-lg border border-gray-700">
              <h3 className="font-medium mb-3 flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                Your Progress
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>Stocks Basics</span>
                  <span className="text-green-400">100%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full w-full"></div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span>Futures Trading</span>
                  <span className="text-yellow-400">60%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full w-3/5"></div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span>Options Trading</span>
                  <span className="text-gray-400">20%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full w-1/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!activeSection ? (
              /* Module Overview */
              <div>
                {currentModule && (
                  <div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-600 p-3 rounded-lg">
                          <currentModule.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h1 className="text-2xl font-bold mb-2">{currentModule.title}</h1>
                          <p className="text-gray-400 mb-4">{currentModule.description}</p>
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(currentModule.difficulty)}`}>
                              {currentModule.difficulty}
                            </span>
                            <div className="flex items-center space-x-1 text-sm text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span>{currentModule.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section List */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Course Sections</h2>
                      {currentModule.sections.map((section, index) => (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className="w-full text-left bg-gray-800 p-4 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="font-medium">{section.title}</h3>
                                <p className="text-sm text-gray-400">{section.content.substring(0, 100)}...</p>
                              </div>
                            </div>
                            <Play className="w-5 h-5 text-gray-400" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Section Content */
              <div>
                {currentSection && (
                  <div>
                    {/* Section Header */}
                    <div className="mb-6">
                      <button
                        onClick={() => setActiveSection('')}
                        className="text-blue-400 hover:text-blue-300 mb-4 flex items-center space-x-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to {currentModule?.title}</span>
                      </button>
                      <h1 className="text-2xl font-bold mb-2">{currentSection.title}</h1>
                    </div>

                    {/* Content */}
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
                      <p className="text-gray-300 leading-relaxed">{currentSection.content}</p>
                    </div>

                    {/* Key Points */}
                    <div className="bg-blue-900/30 border border-blue-700 p-6 rounded-lg mb-6">
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Info className="w-5 h-5 mr-2 text-blue-400" />
                        Key Points
                      </h3>
                      <ul className="space-y-2">
                        {currentSection.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Examples */}
                    {currentSection.examples && (
                      <div className="bg-green-900/30 border border-green-700 p-6 rounded-lg mb-6">
                        <h3 className="font-semibold mb-4 flex items-center">
                          <FileText className="w-5 h-5 mr-2 text-green-400" />
                          Examples
                        </h3>
                        <ul className="space-y-3">
                          {currentSection.examples.map((example, index) => (
                            <li key={index} className="text-gray-300 pl-4 border-l-2 border-green-400">
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Risks */}
                    {currentSection.risks && (
                      <div className="bg-red-900/30 border border-red-700 p-6 rounded-lg mb-6">
                        <h3 className="font-semibold mb-4 flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                          Important Risks
                        </h3>
                        <ul className="space-y-2">
                          {currentSection.risks.map((risk, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => setActiveSection('')}
                        className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                      >
                        Back to Overview
                      </button>
                      
                      <div className="text-sm text-gray-400">
                        Section {currentModule?.sections.findIndex(s => s.id === activeSection)! + 1} of {currentModule?.sections.length}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;