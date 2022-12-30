import { Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type CreditModalPropsType = {
  isCreditOpen: boolean;
  onCreditOpen: () => void;
  onCreditClose: () => void;
};
function CreditModal({ isCreditOpen, onCreditOpen, onCreditClose }: CreditModalPropsType) {
  return (
    <>
      <Modal
        isOpen={isCreditOpen}
        onClose={onCreditClose}
        size="4xl"
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>크레딧</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text align="center" fontSize="xl">
              <Text fontSize="2xl" color="lightblue">
                총괄 팀장 및 기획 팀장 : 은색의 하늘
              </Text>
              <Text fontSize="2xl" color="lightblue">
                개발 팀장 : 세균단 오월비
              </Text>
              <Text fontSize="2xl" color="lightblue">
                기획 부팀장 : 드득
              </Text>
              <br />
              <Text fontSize="4xl" color="greenyellow">
                [프로그래밍]
              </Text>
              <Text fontSize="2xl">세균단 오월비 - [UI, 랭킹 시스템, 빠샤빠샤]</Text>
              <Text fontSize="2xl">공대문과생 - [띠용띠용, 홋치홋치]</Text>
              <Text fontSize="2xl">라리포 - [돌려돌려, 스키스키]</Text>
              <Text fontSize="2xl">류설기 - [요리조리]</Text>
              <Text fontSize="2xl">반지하뺑띠 - [폴짝폴짝]</Text>
              <Text fontSize="2xl">실금닌자 - [깨부깨부]</Text>
              <Text fontSize="2xl">IIK - [UI/UX, 잡아잡아, 빵야빵야]</Text>
              <br />
              <Text fontSize="4xl" color="greenyellow">
                [아트]
              </Text>
              <Text color="green.200">- 타이틀 화면 -</Text>
              <Text fontSize="2xl">곡식이</Text>
              <Text color="green.200">- 배경 및 아이템 -</Text>
              <Text fontSize="2xl">클쓰</Text>
              <Text color="green.200">- UI 및 대사창 -</Text>
              <Text fontSize="2xl">밤바다소다</Text>
              <Text color="green.200">- 캐릭터 아트 -</Text>
              <Text fontSize="2xl">은색의하늘, 진둘</Text>
              <Text color="green.200">- 애니메이션 -</Text>
              <Text fontSize="2xl">라면조리기</Text>
              <Text color="green.200">- 스토리 만화 -</Text>
              <Text fontSize="2xl">곡식이, 드득, 은색의하늘</Text>
              <Text color="green.200">- 로딩 일러 -</Text>
              <Text fontSize="2xl">울면앉되, 저번, 쵸꽃</Text>
              <Text color="green.200">- 특전 일러 -</Text>
              <Text fontSize="2xl">유목, 오덕입니다, 차돌박이, COCOball</Text>
              <br />
              <Text fontSize="2xl" color="greenyellow">
                [사운드]
              </Text>
              <Text color="green.200">- BGM -</Text>
              <Text fontSize="2xl">피젯스피니, 라면조리기</Text>
              <Text color="green.200">- SFX -</Text>
              <Text fontSize="2xl">눈을감자</Text>
              <Text color="green.200">- 음성 편집 -</Text>
              <Text fontSize="2xl">피젯스피니</Text>
              <Text color="green.200">- 보이스 -</Text>
              <Text fontSize="2xl">문금</Text>
              <br />
              <Text fontSize="2xl" color="greenyellow">
                [테스터]
              </Text>
              <Text color="green.200">- QA -</Text>
              <Text fontSize="2xl">꾸앙꾸</Text>
              <Text color="green.200">- 1차 베타테스터 -</Text>
              <Text fontSize="2xl">
                그늘아래, 극단적, 갱후니, 깜까마네, 나는정우, 냉 모밀, 네이아, 도네최고아이돌, 데런, 사랑앵무, 실데,
                새벽밤하늘, 양산쓴양산, 오늘부터고라니, 에네미, 에이스와로우, 카모뜨린, 타비, 파아란머리, 프리미들, 후곡
                호치킨 마스터, NO6ENE
              </Text>
              <Text color="green.200">- 2차 베타테스터 -</Text>
              <Text fontSize="2xl">
                고머수, 그늘아래, 계명, 냉동피자, 네이아, 느와르와, 루나르, 민트밀, 비빔콩, 반누, 삐진곰, 새벽밤하늘,
                세훈밈, 스컬비999, 아리에스, 웰시코기커여워, 지1, 카모뜨린, 탄자나이트, 토마토김밥, 프리미들, 플로리안,
                GreatHistoryMapper, ryuma12
              </Text>
              <br />
              <Text fontSize="2xl" color="greenyellow">
                [Special Thanks]
              </Text>
              <Text fontSize="2xl">하쿠0089, 비즈니스 킴, 곽춘식, 프리터, 별나무, 주닝요, 준99, 피카온, 남궁혁</Text>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onCreditClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreditModal;
