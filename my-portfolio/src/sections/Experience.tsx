function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-y-2 md:gap-6 transition-all duration-300 hover:bg-[#1e293b] hover:shadow-lg hover:scale-[1.01] rounded-md">
          <div className=" text-gray-400">2019.06 – 2024.03</div>
          <div>
            <h3 className="font-semibold text-white">QA Engineer - Nable</h3>
            <p className="text-sm text-gray-400 list-disc list-inside mt-2 space-y-1">KT 기업전용톡, 욜로톡, 자사 앱의 기능 검증 및 사용자 경험 품질 향상을 위한 테스트를 수행했습니다. Centrex 기반 환경에서 실제 음성 통화 기능을 테스트하며, 통화 연결, 전환, 종료 등 주요 흐름의 안정성과 품질을 점검했습니다. 네트워크 환경 변화나 장비 상태에 따른 예외 상황을 검증하며 사용자에게 안정적인 통신 경험을 제공하기 위한 테스트 시나리오를 설계하고 수행했습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
