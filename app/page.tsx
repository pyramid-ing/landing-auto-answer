'use client'

import { Check, Play, Zap, Globe, Shield, Clock, Workflow, Bot, CheckCircle, Code, Database, Settings } from 'lucide-react'
import VideoEmbed from './components/VideoEmbed'
import ImageGallery from './components/ImageGallery'

export default function Home() {
  const handleSignUp = () => {
    // 구글폼 링크로 이동
    const formUrl = 'https://forms.gle/v44PU1AKintkSerW8'
    window.open(formUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Bridgflow</span>
            </div>
            <button
              onClick={handleSignUp}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              사용신청
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Make, N8N에서
                <span className="text-blue-600"> 커스텀 API</span>를
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                공식 지원하지 않는 API들을 Bridgflow가 만들어드립니다. 
                Make, N8N 워크플로우에서 바로 사용할 수 있는 커스텀 API 서비스로 
                자동화의 한계를 뛰어넘으세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleSignUp}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  사용신청
                </button>
              </div>
            </div>
            
            {/* Right Side - Video */}
            <div className="w-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <VideoEmbed videoId="116uC3X3wjM" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              지원하는 자동화 플랫폼
            </h2>
            <p className="text-xl text-gray-600">
              주요 노코드/로우코드 플랫폼과 완벽 호환
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-24 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/logos/make_logo.png" alt="Make.com" className="h-12 w-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Make.com</h3>
              <p className="text-gray-600">Make 워크플로우용 커스텀 API</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-24 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/logos/n8n_logo.png" alt="N8N" className="h-12 w-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">N8N</h3>
              <p className="text-gray-600">N8N 노드용 커스텀 API</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-24 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/logos/zapier-logo.png" alt="Zapier" className="h-12 w-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zapier</h3>
              <p className="text-gray-600">Zapier 웹훅용 커스텀 API</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              커스텀 API 개발 프로세스
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              3단계로 완성되는 맞춤형 API 서비스
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. API 요구사항 분석</h3>
                <p className="text-gray-600">필요한 API 기능과 데이터 구조 분석</p>
              </div>
              
              <div className="text-center">
                                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Settings className="h-8 w-8 text-green-600" />
                 </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. 커스텀 API 개발</h3>
                <p className="text-gray-600">Make, N8N 호환 API 엔드포인트 개발</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. 워크플로우 연동</h3>
                <p className="text-gray-600">실제 워크플로우에서 테스트 및 배포</p>
              </div>
            </div>
          </div>
          
          <ImageGallery 
            images={[
              {
                src: '/images/1.n8n 노드 설정1.png',
                alt: 'N8N 워크플로우 설정',
                title: 'N8N 워크플로우 구성',
                description: '커스텀 API와 연동된 자동화 워크플로우'
              },
              {
                src: '/images/2.node에서 결과2.png',
                alt: 'API 호출 결과',
                title: 'API 호출 성공',
                description: '커스텀 API가 성공적으로 실행되어 데이터 처리'
              },
              {
                src: '/images/3.포스팅결과.png',
                alt: '워크플로우 실행 결과',
                title: '자동화 실행 결과',
                description: '커스텀 API를 통해 완성된 자동화 결과'
              }
            ]}
          />
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              100% 호환되는 커스텀 API
            </h2>
            <p className="text-xl text-gray-600">
              Make, N8N에서 바로 사용할 수 있는 표준 형식
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">API 호환성 특징</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">REST API 표준 형식</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">API 엔드포인트 예시</h4>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono">
                <div>POST /custom-api/process-data</div>
                <div className="text-gray-400 mt-2">{'{'}</div>
                <div className="ml-4">"action": "process",</div>
                <div className="ml-4">"data": "처리할 데이터",</div>
                <div className="ml-4">"format": "json"</div>
                <div>{'}'}</div>
                <div className="text-gray-400 mt-2">Response:</div>
                <div className="text-blue-400">{'{'}</div>
                <div className="ml-4 text-blue-400">"success": true,</div>
                <div className="ml-4 text-blue-400">"result": "처리된 결과",</div>
                <div className="ml-4 text-blue-400">"timestamp": "2024-01-01T00:00:00Z"</div>
                <div className="text-blue-400">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 사용 사례
            </h2>
            <p className="text-xl text-gray-600">
              Bridgflow로 해결할 수 있는 다양한 자동화 요구사항
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">데이터베이스 연동</h3>
              <p className="text-gray-600">기존 데이터베이스와 Make, N8N 연동 API</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">웹사이트 스크래핑</h3>
              <p className="text-gray-600">특정 웹사이트 데이터 수집 자동화 API</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI 서비스 연동</h3>
              <p className="text-gray-600">AI 모델과 자동화 플랫폼 연동 API</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">보안 인증</h3>
              <p className="text-gray-600">복잡한 인증 시스템 연동 API</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">실시간 처리</h3>
              <p className="text-gray-600">실시간 데이터 처리 및 알림 API</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">커스텀 로직</h3>
              <p className="text-gray-600">복잡한 비즈니스 로직 처리 API</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              합리적인 구독 가격
            </h2>
            <p className="text-xl text-gray-600">
              기간별 할인 혜택으로 더욱 경제적인 선택
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2 text-black">1개월</h3>
                <div className="text-2xl font-bold mb-4 text-blue-600">
                  ₩10,000
                  <span className="text-sm font-normal text-gray-600">/월</span>
                </div>
                
                <ul className="space-y-2 mb-6 text-left text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">커스텀 API 개발</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">Make/N8N 연동</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">기본 기술 지원</span>
                  </li>
                </ul>
                
                <button
                  onClick={handleSignUp}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  신청하기
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2 text-black">3개월</h3>
                <div className="text-2xl font-bold mb-4 text-blue-600">
                  ₩25,000
                  <span className="text-sm font-normal text-gray-600">/3개월</span>
                </div>
                <div className="text-xs text-green-600 mb-2">월 8,333원 (17% 할인)</div>
                
                <ul className="space-y-2 mb-6 text-left text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">커스텀 API 개발</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">Make/N8N 연동</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">우선 기술 지원</span>
                  </li>
                </ul>
                
                <button
                  onClick={handleSignUp}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  신청하기
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-xl transform scale-105">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">6개월</h3>
                <div className="text-2xl font-bold mb-4">
                  ₩45,000
                  <span className="text-sm font-normal">/6개월</span>
                </div>
                <div className="text-xs text-blue-200 mb-2">월 7,500원 (25% 할인)</div>
                
                <ul className="space-y-2 mb-6 text-left text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    <span>커스텀 API 개발</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    <span>Make/N8N 연동</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    <span>실시간 모니터링</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    <span>우선 기술 지원</span>
                  </li>
                </ul>
                
                <button
                  onClick={handleSignUp}
                  className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
                >
                  신청하기
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2 text-black">1년</h3>
                <div className="text-2xl font-bold mb-4 text-blue-600">
                  ₩80,000
                  <span className="text-sm font-normal text-gray-600">/1년</span>
                </div>
                <div className="text-xs text-green-600 mb-2">월 6,667원 (33% 할인)</div>
                
                <ul className="space-y-2 mb-6 text-left text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">커스텀 API 개발</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">Make/N8N 연동</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">실시간 모니터링</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-black">24/7 우선 지원</span>
                  </li>
                </ul>
                
                <button
                  onClick={handleSignUp}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            자동화의 한계를 뛰어넘으세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Make, N8N에서 공식 지원하지 않는 API가 필요하시다면 
            Bridgflow가 해결해드립니다. 맞춤형 API로 완벽한 자동화를 구현하세요.
          </p>
          <button
            onClick={handleSignUp}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            무료 상담 신청
          </button>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://open.kakao.com/o/sAPShNNh"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="카카오톡으로 문의하기"
        >
          <img src="/logos/kakao_circle_logo.svg" alt="카카오톡" className="w-14 h-14" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">Bridgflow</span>
              </div>
              <p className="text-gray-400">
                Make, N8N 커스텀 API 서비스로 자동화의 한계를 뛰어넘는 
                맞춤형 솔루션을 제공합니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">지원 플랫폼</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Make.com</li>
                <li>N8N</li>
                <li>Zapier</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li>커스텀 API 개발</li>
                <li>워크플로우 연동</li>
                <li>기술 지원</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400">
                <li>이메일: contact@bridgflow.com</li>
                <li>문의: 24/7 지원</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bridgflow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
