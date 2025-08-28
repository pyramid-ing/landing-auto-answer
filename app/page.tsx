'use client'

import { Check, Play, Zap, Globe, Shield, Clock, Workflow, Bot, CheckCircle, Code, Database, Settings, MessageSquare, Brain, Target, TrendingUp, AlertTriangle, Star, Users, BarChart3 } from 'lucide-react'
import VideoEmbed from './components/VideoEmbed'
import ImageGallery from './components/ImageGallery'
import Script from 'next/script'

export default function Home() {
  const handleSignUp = () => {
    // 구글폼 링크로 이동
    const formUrl = 'https://forms.gle/meSPePtPxrA7Umwn8'
    window.open(formUrl, '_blank')
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '오토앤써는 어떤 서비스인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '오토앤써는 네이버 지식인에서 질문을 자동으로 감지하고 AI가 생성한 자연스러운 답변을 자동으로 등록하는 마케팅 자동화 솔루션입니다.'
        }
      },
      {
        '@type': 'Question',
        name: '설치가 필요한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '아니요, 설치가 필요하지 않습니다. 클라우드 기반 서비스로 서버에서 완전 자동으로 운영됩니다.'
        }
      },
      {
        '@type': 'Question',
        name: '캡차 문제는 어떻게 해결하나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '자동 캡차 우회 시스템을 통해 완벽하게 해결됩니다. 수동 개입 없이 24시간 자동 운영이 가능합니다.'
        }
      }
    ]
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '오토앤써',
    url: 'https://autoanswer.com',
    logo: 'https://autoanswer.com/logo.png',
    description: 'N사 지식 답변 마케팅 자동화 솔루션',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'busidev22@gmail.com',
      availableLanguage: 'Korean'
    },
    sameAs: [
      'https://open.kakao.com/o/sAPShNNh'
    ]
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-[#2Db400] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">오토앤써</span>
            </div>
            <button
              onClick={handleSignUp}
              className="bg-white text-[#2Db400] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              무료 체험
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
                🚀 N사 지식 답변
                <span className="text-[#2Db400]"> 마케팅 자동화</span>
                <br />솔루션
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                100% 자동 답변 시스템으로 24시간 마케팅을 자동화하세요!
              </p>
              <div className="bg-[#2Db400] text-white p-6 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-2">✨ 왜 저희 서비스를 선택해야 할까요?</h3>
                <p className="text-lg"><strong>설치 방식이 아닙니다!</strong> 서버에서 완전 자동으로 마케팅 가능합니다</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleSignUp}
                  className="bg-[#2Db400] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#25a000] transition-colors"
                >
                  무료 체험 시작
                </button>
              </div>
            </div>
            
            {/* Right Side - Video */}
            <div className="w-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <VideoEmbed videoId="pGhbiZWB-oU" />
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
              🔥 핵심 기능 소개
            </h2>
            <p className="text-xl text-gray-600">
              AI 기술로 구현된 완벽한 자동 답변 시스템
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#2Db400]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">스마트 키워드 타겟팅</h3>
              <p className="text-gray-600">원하는 키워드를 설정하면 관련 질문에 자동으로 답변을 등록합니다.</p>
            </div>
            
                          <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-[#2Db400]" />
                </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI 기반 자연스러운 답변</h3>
              <p className="text-gray-600">딱딱한 AI 말투가 아닌, 자연스러운 사용자 맞춤 스타일로 답변 생성</p>
            </div>
            
                          <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-[#2Db400]" />
                </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">실시간 모니터링</h3>
              <p className="text-gray-600">웹 기반 관리 페이지에서 답변 현황을 실시간으로 확인 가능</p>
            </div>
            
                          <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-[#2Db400]" />
                </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% 자동 운영</h3>
              <p className="text-gray-600">캡챠 문제 완벽 해결! 컴퓨터를 켜둘 필요 없는 클라우드 시스템</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💼 이런 분들께 추천합니다
            </h2>
            <p className="text-xl text-gray-600">
              다양한 비즈니스에 최적화된 마케팅 솔루션
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-[#2Db400]">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                                 <div className="flex items-start">
                   <Check className="h-6 w-6 text-[#2Db400] mr-3 mt-0.5 flex-shrink-0" />
                   <div>
                     <strong className="text-gray-900">온라인 쇼핑몰 운영자</strong>
                     <p className="text-gray-600">상품 홍보 및 브랜드 노출 확대</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <Check className="h-6 w-6 text-[#2Db400] mr-3 mt-0.5 flex-shrink-0" />
                   <div>
                     <strong className="text-gray-900">서비스업 사업자</strong>
                     <p className="text-gray-600">전문성 어필 및 고객 유입 증대</p>
                   </div>
                 </div>
              </div>
              <div className="space-y-4">
                                 <div className="flex items-start">
                   <Check className="h-6 w-6 text-[#2Db400] mr-3 mt-0.5 flex-shrink-0" />
                   <div>
                     <strong className="text-gray-900">애드센스 블로그</strong>
                     <p className="text-gray-600">콘텐츠 홍보 및 구독자 확보</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <Check className="h-6 w-6 text-[#2Db400] mr-3 mt-0.5 flex-shrink-0" />
                   <div>
                     <strong className="text-gray-900">마케팅</strong>
                     <p className="text-gray-600">지식서비스를 통한 마케팅</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🏆 경쟁사 대비 우리만의 장점
            </h2>
            <p className="text-xl text-gray-600">
              차별화된 기술력으로 완벽한 자동화를 제공합니다
            </p>
          </div>
          
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-[#2Db400] text-white">
                  <th className="p-4 text-left">구분</th>
                  <th className="p-4 text-center">기존 서비스</th>
                  <th className="p-4 text-center">저희 서비스</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">자동화 수준</td>
                  <td className="p-4 text-center text-gray-600">반자동 (수동 개입 필요)</td>
                  <td className="p-4 text-center bg-green-50 font-bold text-[#2Db400]">100% 완전 자동</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">설치 방식</td>
                  <td className="p-4 text-center text-gray-600">컴퓨터 설치형</td>
                  <td className="p-4 text-center bg-green-50 font-bold text-[#2Db400]">클라우드 원격 서비스</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold">캡챠 해결</td>
                  <td className="p-4 text-center text-gray-600">수동 해결 필요</td>
                  <td className="p-4 text-center bg-green-50 font-bold text-[#2Db400]">자동 해결</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">답변 품질</td>
                  <td className="p-4 text-center text-gray-600">획일적 답변</td>
                  <td className="p-4 text-center bg-green-50 font-bold text-[#2Db400]">AI 맞춤 스타일</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🤖 AI 변조 기술
            </h2>
            <p className="text-xl text-gray-600">
              자연스러운 답변을 위한 고급 AI 기술
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">설정 화면</h3>
              <img 
                src="/images/AI 변조 기술_설정.png" 
                alt="AI 변조 기술 설정" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">실제 답변 결과</h3>
              <img 
                src="/images/AI 변조 기술_실제답변.png" 
                alt="AI 변조 기술 실제답변" 
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              실제 예시
            </h2>
            <p className="text-xl text-gray-600">
              3단계로 완성되는 완전 자동화 시스템
            </p>
          </div>
          
          <div className="space-y-12">
                         <div className="bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-[#2Db400]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. 키워드 감지</h3>
              <p className="text-lg text-gray-600 mb-6">
                설정한 키워드로 질문을 감지합니다. 키워드: <strong>홍삼, 흑염소</strong>
              </p>
              <img 
                src="/images/예시_프로그램.png" 
                alt="프로그램 예시" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
                         <div className="bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-[#2Db400]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. 지식 질문</h3>
              <p className="text-lg text-gray-600 mb-6">
                아래처럼 실제 질문내용을 확인해서 <strong><u>AI로 답변을 생성</u></strong>합니다.
              </p>
              <img 
                src="/images/예시_지식인질문.png" 
                alt="지식인 질문 예시" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
                         <div className="bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-[#2Db400]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. 지식 답변</h3>
              <p className="text-lg text-gray-600 mb-6">
                AI로 생성된 답변을 자동으로 답변합니다. <br />
                여기서 상단, 내용, 하단에 입력한 고정 답변 내용을 <strong><u>답변에 자연스럽게 포함</u></strong>합니다.
              </p>
              <img 
                src="/images/예시_지식인답변.png" 
                alt="지식인 답변 예시" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-8">
            <div className="flex items-start">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">⚠️ 이용 전 꼭 확인해주세요</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>N사 정책에 따른 계정 제재 가능성에 대해 당사는 책임지지 않습니다</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>AI 사용량에 따라 추가 비용이 발생할 수 있습니다</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>시스템 안정성을 위해 계정별 별도 서버 사용으로 계정당 비용이 산정됩니다</span>
                  </li>
                </ul>
              </div>
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
              수익 대비 최적화된 가격으로 제공
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                              <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-black">1개월</h3>
                  <div className="text-2xl font-bold mb-4 text-[#2Db400]">
                    ₩39,900
                    <span className="text-sm font-normal text-gray-600">/월</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6 text-left text-sm">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-[#2Db400]" />
                      <span className="text-black">네이버 지식인 자동 답변</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-[#2Db400]" />
                      <span className="text-black">기본 기술 지원</span>
                    </li>
                  </ul>
                  
                  <button
                    onClick={handleSignUp}
                    className="w-full bg-[#2Db400] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#25a000] transition-colors text-sm"
                  >
                    신청하기
                  </button>
                </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                              <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 text-black">3개월</h3>
                  <div className="text-2xl font-bold mb-4 text-[#2Db400]">
                    ₩109,900
                    <span className="text-sm font-normal text-gray-600">/3개월</span>
                  </div>
                  <div className="text-xs text-[#2Db400] mb-2">월 36,633원 (8% 할인)</div>
                  
                  <ul className="space-y-2 mb-6 text-left text-sm">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-[#2Db400]" />
                      <span className="text-black">네이버 지식인 자동 답변</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-[#2Db400]" />
                      <span className="text-black">우선 기술 지원</span>
                    </li>
                  </ul>
                  
                  <button
                    onClick={handleSignUp}
                    className="w-full bg-[#2Db400] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#25a000] transition-colors text-sm"
                  >
                    신청하기
                  </button>
                </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#2Db400] to-[#25a000] text-white p-6 rounded-2xl shadow-xl transform scale-105">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">6개월</h3>
                <div className="text-2xl font-bold mb-4">
                  ₩199,900
                  <span className="text-sm font-normal">/6개월</span>
                </div>
                <div className="text-xs text-green-200 mb-2">월 33,317원 (17% 할인)</div>
                
                <ul className="space-y-2 mb-6 text-left text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    <span>네이버 지식인 자동 답변</span>
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
                  className="w-full bg-white text-[#2Db400] py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
                >
                  신청하기
                </button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2 text-black">1년</h3>
                <div className="text-2xl font-bold mb-4 text-[#2Db400]">
                  ₩359,900
                  <span className="text-sm font-normal text-gray-600">/1년</span>
                </div>
                <div className="text-xs text-[#2Db400] mb-2">월 29,992원 (25% 할인)</div>
                
                <ul className="space-y-2 mb-6 text-left text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-[#2Db400]" />
                    <span className="text-black">네이버 지식인 자동 답변</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-[#2Db400]" />
                    <span className="text-black">실시간 모니터링</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-[#2Db400]" />
                    <span className="text-black">24/7 우선 지원</span>
                  </li>
                </ul>
                
                <button
                  onClick={handleSignUp}
                  className="w-full bg-[#2Db400] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#25a000] transition-colors text-sm"
                >
                  신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2Db400]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지식인 마케팅을 자동화하세요
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            오토앤써로 24시간 자동 답변하여 마케팅 효과를 극대화하세요.
            수동 답변 대비 10배 이상의 효율성을 경험해보세요.
          </p>
          <button
            onClick={handleSignUp}
            className="bg-white text-[#2Db400] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            무료 체험 시작
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
                <Brain className="h-6 w-6 text-[#2Db400]" />
                <span className="ml-2 text-lg font-bold">오토앤써</span>
              </div>
              <p className="text-gray-400">
                AI 기술로 구현된 지식인 자동 답변 프로그램으로 
                24시간 자동 운영을 통해 마케팅 효과를 극대화합니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">지원 플랫폼</h4>
              <ul className="space-y-2 text-gray-400">
                <li>네이버 지식인</li>
                <li>추가 플랫폼 준비중</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li>자동 질문 감지</li>
                <li>AI 답변 생성</li>
                <li>자동 답변 등록</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400">
                <li>이메일: busidev22@gmail.com</li>
                <li>문의: 24/7 지원</li>
              </ul>
            </div>
          </div>
          
                      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 오토앤써. All rights reserved.</p>
            </div>
        </div>
      </footer>
      </div>
    </>
  )
}
