import { AspectRatio, Container, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  useDisclosure,
} from "@chakra-ui/react";

import Leaderboard from "./components/Leaderboard";
import CreditModal from "./components/CreditModal";
import { useRef } from "react";

const App = () => {
  const { isOpen: isCreditOpen, onOpen: onCreditOpen, onClose: onCreditClose } = useDisclosure();
  const { isOpen: isOptDownOpen, onOpen: onOptDownOpen, onClose: onOptDownClose } = useDisclosure();
  const cancelOptDownRef = useRef(null);

  return (
    <>
      <main>
        <Container maxW="4xl">
          <Flex flexDir="column" align="center" my="16">
            <Heading as="h2" fontSize="48">
              Waktaverse Games
            </Heading>
            <Heading as="h1" title="Waktaverse Sports Day" fontSize="64" textShadow="0px 0px 15px white">
              왁타버스 대운동회!
            </Heading>
            <Image
              src="https://ifh.cc/g/YtsQ55.jpg"
              alt="왁타버스 대운동회! 타이틀"
              w="6xl"
              mt="4"
              filter={`blur(4px)`}
            />
            <AspectRatio ratio={1} w="36" mt="4">
              <Image src="https://ifh.cc/g/yC8DnL.png" alt="왁타버스 대운동회! 아이콘" />
            </AspectRatio>

            <Divider />
            <Leaderboard />
            <Divider />

            <VStack mt="4">
              <a href="https://gitlab.com/waktaverse-games/waktaverse-sports-day-executable/-/raw/main/Release.zip?inline=false">
                <Button>
                  <Text color="green">(일반 버전)</Text> 다운로드
                </Button>
              </a>
              <Button onClick={onOptDownOpen}>
                <Text color="orange">(최적화 버전)</Text> 다운로드
              </Button>
            </VStack>

            <Text mt="4" color="gray">
              왁굳형 + 이세돌 분들이 플레이 한 서버 클라이언트는 모두 플레이 하시고 난 다음 공개됩니다
            </Text>
          </Flex>
        </Container>

        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelOptDownRef}
          onClose={onOptDownClose}
          isOpen={isOptDownOpen}
          isCentered
        >
          <AlertDialogOverlay />

          <AlertDialogContent>
            <AlertDialogHeader>최적화 버전 다운로드</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Text color="red">최적화 버전은 오류가 있을 수 있습니다</Text>
              <Text>오류가 나면 일반버전으로 플레이 해주세요</Text>
              <Text>(플레이 데이터는 이어집니다)</Text>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelOptDownRef} onClick={onOptDownClose}>
                취소
              </Button>
              <a href="https://gitlab.com/waktaverse-games/waktaverse-sports-day-executable/-/raw/main/ReleaseMasterOptimize.zip?inline=false">
                <Button ml={3} colorScheme="green">
                  다운로드
                </Button>
              </a>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Alert status="warning" variant="solid" p="4" fontSize="xl">
          <AlertIcon />
          타인에게 불쾌감을 주는 닉네임을 쓰거나 부정한 방법으로 게임을 플레이 시 영구 IP 밴 처리 될 수 있습니다.
        </Alert>

        <InfoIcon position="fixed" right="8" bottom="8" boxSize="8" onClick={onCreditOpen} />
        <CreditModal isCreditOpen={isCreditOpen} onCreditOpen={onCreditOpen} onCreditClose={onCreditClose} />
      </main>
    </>
  );
};

export default App;
