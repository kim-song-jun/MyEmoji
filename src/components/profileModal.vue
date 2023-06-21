<template>
  <!-- Main modal -->
  <div
    id="defaultModal"
    data-modal-target="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            육마로, 프로젝트 매니저
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <h4 class="text-normal font-semibold text-gray-900">
            안녕하세요. 백엔드 개발자를 꿈꾸는 육마로입니다.
          </h4>
          <Markdown :source="source"></Markdown>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="defaultModal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            data-modal-hide="defaultModal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Markdown from "vue3-markdown-it";
  export default {
    components: {
      Markdown,
    },
    data() {
      return {
        source: `# 육마로, 프로젝트 매니저
        # 졸업작품 (종합설계) 정리

        [프론트 가이드라인](https://www.notion.so/a9c3b39501af497498bb993fc279743f?pvs=21)

        [장고 가이드라인](https://www.notion.so/0463219d9a9e4670be5f83bd1d2f7bb8?pvs=21)

        [스프링 가이드라인](https://www.notion.so/75ab3d71dfd04c3b962768a302e6533e?pvs=21)

        육마로
        소프트웨어 / 2018158018 / 4학년
        기획, 설계, 프로젝트 매니징

        안녕하세요. 백엔드 개발자를 꿈꾸는 육마로입니다.

        - 프로젝트 개요

        프로젝트는 사용자의 사진을 입력받아 여러가지 이모티콘을 생성해주는 웹앱입니다. jpg, png 형식의 파일을 입력받아 이미지의 전처리, 후처리를 포함한 AI 파이프라인을 통과시켜 사용자에게 맞춤형 gif를 제공하는 것을 목표하고 있습니다.

        - 역할

        저는 프로젝트 기획, 아키텍처 설계, 프로젝트 일정관리, 기술 스택 선정, 문서 작업을 수행했습니다. 4명이 하나의 프로덕트를 기간 안에 만들어 낼 수 있도록 노력했으며 프로젝트 규모 설정과 진행 일정을 관리하였습니다. 팀원이 개발을 할때 서로가 서로에게 병목이 되거나 코드충돌을 일으키지 않도록 프로젝트를 구성하였고 팀원들 중간에서 서로의 원활한 의사소통을 도왔습니다.

        - 프로젝트 진행

        하나의 프로젝트에서 git을 이용해 각자 브랜치를 열고 feature에 따라 pull request & merge를 하는 방식의 진행이 팀의 역량으로는 힘들다고 생각했습니다. 그래서 프론트 백엔드 뿐만아니라 담당하는 구역을 프로젝트 단위로 나누고 각 프로젝트가 하나의 서버로써 서로 restful하게 통신하는 것을 기본 골자로 아키텍처를 구성했습니다. 사용자에게 보여지는 클라이언트 부분을 하나의 Vue.js 프로젝트로 진행하였고 백엔드에서는 request 단위와 사용자의 Original 이미지를 관리하는 Java-spring 프로젝트와 ai 파이프라인과 이미지 전후처리, 실제 이미지 조회를 담당하는 Python-Django 프로젝트를 분리하였습니다. 백엔드 서버 프로젝트들은 Rest api의 principle을 지키며 개발하였습니다. 저를 제외한 3명의 팀원이 하나의 프로젝트 내지는 서버를 관리하고 서로 간의 의사소통을 통해 서비스를 개발해 나갈 수 있었습니다.

        - 프로젝트에 사용된 기술 스택

        프론트엔드 : JS, Vue.js, tailwind

        백엔드(조회) : Java, Spring Boot, JPA, MariaDB

        백엔드(AI) : Python, Django

        협업 : git, github, sourcetree, Jira

        - 아쉬운점

        1차 기획서와 발표를 진행했던 프로젝트를 포기하고 새로운 프로젝트로 2차 기획과 설계를 시작하여 많은 아쉬움이 남습니다. 8개월 정도 기획, 아키텍처 설계, 기술검토를 진행했던 자료들을 포기하고 시작하여 조금은 촉박했던 것 같습니다. 하지만 팀원들이 안좋은 상황에도 포기하지 않고 끝까지 따라와주었기 때문에 잘 마무리할 수 있었던것 같습니다.

        CI/CD 구현을 못해서 아쉽습니다. Jenkins와 Docker를 사용해서 배포 자동화를 하고싶었지만 못했습니다. 또한 Django 서버 트래픽에 따라서 인스턴스가 추가되도록 구성하고 싶었지만 AWS가 비싸서 못했습니다. 진짜 비쌉니다…

        - 기억에 남는 점

        AWS 진짜 너무 비쌉니다. AI를 학습시키는게 아니고 그냥 있는 모델을 동작시키려고 해도 cuda설정때문에 GPU가 필요해서 aws에서 제일 싼 gpu 인스턴스를 이용했습니다. 그래도 1~2주만에 20만원이상 나왔습니다. 항상 켜두는것도 아닌데요. aws 이용을 지양하시거나 국내 호스팅 업체의 gpu 월 정액제를 고려해보시기 바랍니다. 아니면 기획에서 AI를 빼는 것도 방법입니다.

          AI 파이프라인을 개발할때 데모버전 기준으로 한 요청에 3*3, 3*5 개의 결과 이미지가 나옵니다. 이걸 단일 프로세스로 진행하면 소요시간이 말도안되게 올라갔습니다. 그래서 멀티 프로세스로 바꿨고 그럼에도 불구하고 소요시간이 길다는 문제와 한 요청이 처리가 안되면 다음 요청이 기다리고 있는 문제가 있어서 요청이 올때마다 프로세스를 발생기키게 수정했습니다. gpu의 성능이 안좋아서 그런지 오버헤드가 발생하며 서버가 죽어버리는 현상이 생겼습니다. 그래서 모델의 작업단위를 수정하는 등의 문제 발생 > 성능 개선 > 문제발생 > 성능 개선을 반복하며 진행했던 것이 기억에 남습니다.

        - 깃헙 링크

        https://github.com/RDDcat
        `,
      };
    },
  };
</script>

<style></style>
