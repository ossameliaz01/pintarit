import { useState } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle, Trophy, BookOpen, Star, AlertCircle } from 'lucide-react'

interface PlacementTestProps {
  onNavigate: (page: string) => void
}

const questions = [
  {
    id: 1,
    question: 'Apa fungsi utama dari sistem operasi pada komputer?',
    options: [
      { id: 'a', text: 'Menjalankan program antivirus', score: 0 },
      { id: 'b', text: 'Mengelola perangkat keras dan lunak, serta sumber daya sistem', score: 10 },
      { id: 'c', text: 'Membuat dokumen dan tabel', score: 0 },
      { id: 'd', text: 'Menghubungkan komputer ke internet', score: 0 }
    ]
  },
  {
    id: 2,
    question: 'Berapakah panjang bit dari IPv4?',
    options: [
      { id: 'a', text: '16 bit', score: 0 },
      { id: 'b', text: '32 bit', score: 10 },
      { id: 'c', text: '64 bit', score: 0 },
      { id: 'd', text: '128 bit', score: 0 }
    ]
  },
  {
    id: 3,
    question: 'Apa fungsi dari Subnet Mask?',
    options: [
      { id: 'a', text: 'Mempercepat koneksi internet', score: 0 },
      { id: 'b', text: 'Menyembunyikan alamat IP dari peretas', score: 0 },
      { id: 'c', text: 'Memisahkan Network ID dan Host ID pada IP Address', score: 10 },
      { id: 'd', text: 'Memberikan alamat IP secara otomatis ke klien', score: 0 }
    ]
  },
  {
    id: 4,
    question: 'Perintah Linux apa yang digunakan untuk melihat daftar file dan direktori?',
    options: [
      { id: 'a', text: 'cd', score: 0 },
      { id: 'b', text: 'ls', score: 10 },
      { id: 'c', text: 'mkdir', score: 0 },
      { id: 'd', text: 'rm', score: 0 }
    ]
  },
  {
    id: 5,
    question: 'Dalam Cloud Computing, layanan yang menyediakan infrastruktur seperti server dan storage disebut:',
    options: [
      { id: 'a', text: 'SaaS', score: 0 },
      { id: 'b', text: 'PaaS', score: 0 },
      { id: 'c', text: 'IaaS', score: 10 },
      { id: 'd', text: 'DaaS', score: 0 }
    ]
  }
]

export default function PlacementTest({ onNavigate }: PlacementTestProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isFinished, setIsFinished] = useState(false)

  const handleSelect = (optionId: string) => {
    setAnswers(prev => ({ ...prev, [currentStep]: optionId }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      setIsFinished(true)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const calculateScore = () => {
    let totalScore = 0
    questions.forEach((q, idx) => {
      const selectedId = answers[idx]
      const option = q.options.find(o => o.id === selectedId)
      if (option) totalScore += option.score
    })
    return totalScore
  }

  const renderResult = () => {
    const score = calculateScore()
    let level = 'Beginner'
    let recommendation = 'Computer Basics'
    let color = '#4CAF50'
    let levelLabel = 'Pemula'

    if (score >= 40) {
      level = 'Expert'
      recommendation = 'Linux & Cloud'
      color = '#EF4444'
      levelLabel = 'Ahli'
    } else if (score >= 30) {
      level = 'Advanced'
      recommendation = 'Routing & Server'
      color = '#FFC107'
      levelLabel = 'Mahir'
    } else if (score >= 20) {
      level = 'Intermediate'
      recommendation = 'Networking & IP Address'
      color = '#9568FF'
      levelLabel = 'Menengah'
    }

    return (
      <div className="flex flex-col items-center justify-center p-8 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ background: `${color}22` }}>
          <Trophy size={48} style={{ color }} />
        </div>
        <h2 className="text-3xl font-bold text-center mb-2" style={{ color: '#372466' }}>Tes Selesai!</h2>
        <p className="text-center text-lg mb-8" style={{ color: '#969696' }}>Kamu mendapatkan skor <strong style={{ color: '#372466' }}>{score}</strong> dari {questions.length * 10}</p>
        
        <div className="w-full max-w-md rounded-2xl p-6 mb-8 relative overflow-hidden" style={{ background: '#F8F8FC', border: '1px solid #E5E5E5' }}>
          <div className="absolute top-0 left-0 w-2 h-full" style={{ background: color }} />
          <h3 className="font-semibold text-sm mb-1" style={{ color: '#969696' }}>Tingkat Kemampuan Kamu:</h3>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold" style={{ color }}>{level} ({levelLabel})</span>
          </div>
          
          <h3 className="font-semibold text-sm mb-1" style={{ color: '#969696' }}>Rekomendasi Modul Mulai:</h3>
          <div className="flex items-center gap-2 font-semibold text-lg" style={{ color: '#372466' }}>
            <BookOpen size={20} style={{ color: '#9568FF' }} />
            {recommendation}
          </div>
        </div>

        <button 
          onClick={() => onNavigate('roadmap')}
          className="w-full max-w-md py-4 rounded-xl text-lg font-semibold text-white flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-95"
          style={{ background: 'linear-gradient(135deg, #372466, #9568FF)' }}>
          <CheckCircle size={20} />
          Kembali ke Roadmap
        </button>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-white" style={{ background: '#F8F8FC' }}>
      {/* Header */}
      <div className="p-6 bg-white border-b flex items-center justify-between" style={{ borderColor: '#F0EFF8' }}>
        <div>
          <h1 className="text-2xl font-bold" style={{ color: '#372466' }}>Placement Test</h1>
          <p className="text-sm" style={{ color: '#969696' }}>Evaluasi kemampuan IT-mu untuk menemukan titik mulai yang pas.</p>
        </div>
        <button onClick={() => onNavigate('roadmap')} className="px-4 py-2 rounded-xl text-sm font-semibold transition-colors" style={{ color: '#969696', background: '#F0EFF8' }}>
          Tutup
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center">
        {isFinished ? (
          renderResult()
        ) : (
          <div className="w-full max-w-2xl mt-4">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-sm font-semibold mb-2" style={{ color: '#969696' }}>
                <span>Pertanyaan {currentStep + 1} dari {questions.length}</span>
                <span style={{ color: '#9568FF' }}>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 rounded-full w-full" style={{ background: '#E5E5E5' }}>
                <div className="h-2 rounded-full transition-all duration-300" style={{ width: `${((currentStep + 1) / questions.length) * 100}%`, background: 'linear-gradient(90deg, #9568FF, #B794F6)' }} />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl p-8 mb-6 shadow-sm" style={{ border: '1px solid #F0EFF8' }}>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center font-bold text-xl text-white" style={{ background: 'linear-gradient(135deg, #372466, #9568FF)' }}>
                  {currentStep + 1}
                </div>
                <h2 className="text-xl md:text-2xl font-bold leading-tight" style={{ color: '#333333' }}>
                  {questions[currentStep].question}
                </h2>
              </div>

              <div className="flex flex-col gap-3">
                {questions[currentStep].options.map(opt => {
                  const isSelected = answers[currentStep] === opt.id
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(opt.id)}
                      className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-200 ${isSelected ? 'scale-[1.01]' : 'hover:scale-[1.01]'}`}
                      style={{ 
                        border: isSelected ? '2px solid #9568FF' : '2px solid #F0EFF8',
                        background: isSelected ? 'rgba(149,104,255,0.05)' : 'white'
                      }}
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ border: `2px solid ${isSelected ? '#9568FF' : '#D1D1D1'}`, background: isSelected ? '#9568FF' : 'transparent' }}>
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className={`text-left text-lg font-medium ${isSelected ? '' : 'text-gray-700'}`} style={{ color: isSelected ? '#372466' : '#555555' }}>
                        {opt.text}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                style={{ color: '#969696', background: currentStep === 0 ? 'transparent' : '#F0EFF8' }}
              >
                <ArrowLeft size={18} />
                Sebelumnya
              </button>
              
              <button
                onClick={handleNext}
                disabled={!answers[currentStep]}
                className={`px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all ${!answers[currentStep] ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 active:scale-95'}`}
                style={{ background: 'linear-gradient(135deg, #372466, #9568FF)', color: 'white' }}
              >
                {currentStep === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
                {currentStep !== questions.length - 1 && <ArrowRight size={18} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
