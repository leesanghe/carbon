# React Native 개발 환경 설정 및 안드로이드스튜디오 테스트

[참고](https://yun5o.tistory.com/entry/React-Native-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%951-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0) 참고사이트
## 개발 환경 설정
1. **Node.js 설치**
   - [Node.js 공식 웹사이트](https://nodejs.org/)에서 설치하십시오.

2. **Android Studio 설치**
   - [Android Studio 공식 웹사이트](https://developer.android.com/studio)에서 설치하십시오.

3. **에뮬레이터 실행**
   - Android Studio 내에서 AVD Manager를 통해 에뮬레이터를 설정하고 실행합니다.
   - 에뮬레이터가 실행되지 않으면 BIOS에서 가상화 설정(VT-x 또는 AMD-V)을 활성화해야 할 수 있습니다.

## React Native 프로젝트 생성 및 실행
1. **프로젝트 생성**
   ```bash
   npx react-native init MyProject
   ```

2. **프로젝트 디렉토리로 이동**
   ```bash
   cd MyProject
   ```

3. **에뮬레이터에서 앱 실행**
   ```bash
   npx react-native run-android
   ```

## Spring REST API 생성 및 테스트

1. **REST 컨트롤러 생성**
   - `@RestController` 어노테이션을 사용하여 API 엔드포인트를 정의합니다.

2. **애플리케이션 실행 및 테스트**
   - 애플리케이션을 실행하고 Postman 또는 curl을 사용하여 API를 테스트합니다.
```

   npx react-native run-android
   ```
   

   
