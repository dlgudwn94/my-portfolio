import ExperienceCard from "../components/ExperienceCard";

function Experience() {
  return (
    <section id="experience" className="px-2 py-20">
      <div className="space-y-12">
        <ExperienceCard date="2024.09 - 2025.03" title="Frontend Bootcamp - 멋쟁이사자처럼" description="6개월간의 프론트엔드 부트캠프를 통해 JavaScript, React, TypeScript, TailwindCSS 등의 기술을 익혔고, Supabase를 연동한 팀 프로젝트를 통해 개발 경험을 쌓았습니다." />

        <ExperienceCard date="2019.06 - 2024.03" title="QA Engineer - Nable" description="KT 기업전용톡, 욜로톡, 자사 앱의 기능 검증 및 사용자 경험 품질 향상을 위한 테스트를 수행했습니다. Centrex 기반 환경에서 실제 음성 통화 기능을 테스트하며, 통화 연결, 전환, 종료 등 주요 흐름의 안정성과 품질을 점검했습니다. 네트워크 환경 변화나 장비 상태에 따른 예외 상황을 검증하며 사용자에게 안정적인 통신 경험을 제공하기 위한 테스트 시나리오를 설계하고 수행했습니다." />
      </div>
    </section>
  );
}

export default Experience;
