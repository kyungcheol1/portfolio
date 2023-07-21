    defi1 klayswap과 uniswap을 참조해 만든 defi 사이트 입니다.
    역할 : 팀장 역할과 governance 부분과 airdrop, timelock 을 구현했습니다.
    1. governance의 경우 ownable 설정과 제안 부분은 매핑을 통해 실행시킬 함수명, 인자값, 제안자, 시작블럭, 엔드블럭 등을 저장하고 따로 amount 값을 두어 제안이 될 때마다 1씩 추가되며 amount 값으로 매핑이 되도록 지정했습니다.
    2. 타임락은 시작 블럭과, delay 시간으로 현재 블록과 비교하고, 이를 매핑데이터로 저장하여 state 상태값을 저장하도록합니다
    3. airdrop의 경우 기준잡은 토큰의 값의 총량과, 내 토큰의 값을 퍼센트로 만들고, 드랍할 토큰을 계산해주는 방식을 채택했습니다.


    terminus 웹소켓과 nodepty를 활용한 linux 명령어 연습 사이트입니다.
    역할 : backend 서버를 구축했습니다.

