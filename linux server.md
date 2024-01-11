# 리눅스 시스템 관리 및 도구 설치 가이드

- ubuntu, mint 환경, java, oracle, svn, jenkins, cuda 설정

이 문서는 GRUB 설정 변경, 폴더명 변경, Java 설치, Git, Docker, Oracle, 그리고 SVN 설치 방법을 안내합니다.

## GRUB 설정 변경

1. **GRUB 설정 파일 열기:**
   - `sudo gedit /etc/default/grub` 명령어를 사용하여 관리자 권한으로 GRUB의 기본 설정 파일을 편집합니다.
   - gedit은 GNOME 데스크탑 환경에서 사용되는 텍스트 에디터입니다.
2. **GRUB 커널 파라미터 수정:**
   - `GRUB_CMDLINE_LINUX_DEFAULT="기존 파라미터"` 라인을 `GRUB_CMDLINE_LINUX_DEFAULT="intel_idle.max_cstate=1"` 로 변경합니다.
3. **GRUB 업데이트:**
   - 변경 사항을 저장하고 `sudo update-grub` 명령을 실행하여 GRUB 구성을 업데이트합니다.
4. **시스템 재부팅:**
   - `sudo reboot` 명령으로 시스템을 재부팅하여 변경 사항을 적용합니다.

## 폴더명 변경

1. **언어 설정:**
   - `export LANG=C` 명령어로 언어 설정을 변경합니다.
2. **폴더명 변경 도구 실행:**
   - `xdg-user-dirs-gtk-update` 명령으로 폴더명을 변경할 수 있습니다.


## Java 11 설치

1. **시스템 업데이트 및 Java 설치:**

```bash
    # 업데이트 
    sudo apt update
    # 설치
    sudo apt install openjdk-11-jdk
    # 버전확인
    java -version
    # 환경변수 설정
    sudo update-alternatives --config java
    # 경로적용
    echo 'export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64' >> ~/.bashrc
    source ~/.bashrc
    # java_home 체크
    echo $JAVA_HOME
 ```

2. ** git설치: **
```bash
     `sudo apt install git`
 ```
## Docker 설치 

```bash
    # 저장소 추가 및 업데이트
    sudo add-apt-repository universe
    sudo apt-get update
    # Docker 설치 및 버전 확인
    sudo apt-get install docker.io
    docker --version
    # Docker 서비스 시작 및 자동 실행 설정
    sudo systemctl start docker
    sudo systemctl enable docker
    # 사용자 권한 설정
    sudo usermod -aG docker $USER
    newgrp docker

```

## Oracle18c 설치 

```bash
    # oracle공식 이미지 다운로드
    git clone https://github.com/oracle/docker-images.git
    # 이미지 빌드 및 실행
    # 경로이동
    cd ./docker-images/OracleDatabase/SingleInstance/dockerfiles
    # 쉘 이미지 다운로드 실행 
    ./buildContainerImage.sh -v 18.4.0 -x
    # oracle18c 컨테이너 실행 
    docker run --name oracle18c -d --restart=always -p 1521:1521 -e ORACLE_PWD=oracle -e ORACLE_CHARACTERSET=AL32UTF8 oracle/database:18.4.0-xe

```
## svn 설치 

```bash
    sudo apt install subversion subversion-tools
    svn --version
    # 폴더생성
    sudo mkdir /home/svn
    # 프로젝트 폴더생성
    sudo svnadmin create /home/svn/teamproj
    # pw, au 권한 사용 설정
    sudo xed /home/svn/teamproj/conf/svnserve.conf
    # 사용자 pw 적용
    sudo xed /home/svn/teamproj/conf/passwd
    # 사용자별 권한 설정
    sudo xed /home/svn/teamproj/conf/authz
    # 서버시작
    sudo svnserve -d -r /home/svn/teamproj
    # 네트워크 확인
    ps aux|grep svn  
    sudo netstat -anp | grep svn

```


   
