Ubuntu에 Anaconda를 설치하는 과정은 간단하며, 몇 단계로 나누어 설명할 수 있습니다. Anaconda는 데이터 과학 및 기계 학습 분야에서 널리 사용되는 Python과 R 언어용 패키지 관리자 및 환경 관리자입니다. 다음 단계에 따라 설치할 수 있습니다:

### 1. Anaconda 설치 파일 다운로드
1. [Anaconda Individual Edition 페이지](https://www.anaconda.com/products/individual)로 이동합니다.
2. Linux 용 Anaconda 설치 프로그램을 선택합니다.
3. 설치 파일을 다운로드합니다. 명령줄을 사용하여 다운로드하는 경우 `wget` 명령을 사용할 수 있습니다:
   ```bash
   wget https://repo.anaconda.com/archive/Anaconda3-2023.11-Linux-x86_64.sh
   ```
   (위의 링크 및 버전은 변경될 수 있으니 웹사이트에서 최신 버전을 확인하세요.)

### 2. 설치 스크립트 실행
1. 다운로드한 스크립트를 실행합니다:
   ```bash
   chmod 755 Anaconda3-2023.09-0-Linux-x86_64.sh
   ./Anaconda3-2023.09-0-Linux-x86_64.sh
   ```
   (파일 이름은 다운로드한 Anaconda 버전에 따라 다를 수 있습니다.)

### 3. 설치 과정 수행
1. 라이선스 조항을 읽고 동의합니다.
2. 설치 위치를 선택합니다 (기본 경로를 사용할 수 있습니다).
3. 설치가 완료된 후, Anaconda의 설치 경로를 사용자의 `.bashrc` 또는 `.bash_profile`에 추가할지 물어볼 것입니다. 'yes'를 선택하여 환경 변수를 설정합니다.

### 4. 설치 확인 및 초기화
1. 새 터미널 창을 열거나 현재 세션을 재시작합니다.
2. Anaconda가 제대로 설치되었는지 확인합니다:
   ```bash
   conda list
   ```
3. 필요한 경우, Anaconda를 초기화합니다:
   ```bash
   conda init
   ```

### 5. (선택 사항) 가상 환경 생성 및 관리
Anaconda를 사용하여 다양한 프로젝트에 대한 독립적인 Python 환경을 만들고 관리할 수 있습니다. 예를 들어, 새 환경을 만들려면:
```bash
conda create -n myenv python=3.8
```
여기서 `myenv`는 환경 이름이고 `python=3.8`는 설치할 Python 버전을 나타냅니다.

### 주의 사항
- 설치 중에는 인터넷 연결이 안정적이어야 합니다.
- 설치 파일의 버전이나 링크는 시간이 지남에 따라 변경될 수 있으니, 항상 Anaconda의 공식 웹사이트에서 최신 정보를 확인하세요.
- 기존에 Python이 설치되어 있는 경우, Anaconda 설치로 인해 기본 Python 경로가 변경될 수 있습니다. 환경 설정을 적절히 관리하는 것이 중요합니다.

- 가상환경 목록
  `conda env list`
- 가상환경내 라이브러리 목록
  `conda list`
- 아나콘다 가상환경 추가
  `conda create --name py38 python=3.8`
- 활성화
 `conda activate py38`
- 비활성화
  `conda deactivate`
- 아나콘다 가상환경 삭제
  `conda evn remove –n py38`


### cuda 11.2 , cuDnn 8.1, python=3.8, tensorflow_gpu=2.10.0
```bash

   wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-ubuntu1804.pin
   
   sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600
   
   wget https://developer.download.nvidia.com/compute/cuda/11.2.0/local_installers/cuda-repo-ubuntu1804-11-2-local_11.2.0-460.27.04-1_amd64.deb
   
   sudo dpkg -i cuda-repo-ubuntu1804-11-2-local_11.2.0-460.27.04-1_amd64.deb
   
   sudo apt-key add /var/cuda-repo-ubuntu1804-11-2-local/7fa2af80.pub
   
   sudo apt-get update
   
   sudo apt-get -y install cuda

   sudo chmod +x cudnn-11.2-linux-x64-v8.1.0.77.tgz
   tar -xzvf cudnn-11.2-linux-x64-v8.1.0.77.tgz
   sudo cp cuda/include/cudnn*.h /usr/local/cuda/include
   sudo cp -P cuda/lib64/libcudnn* /usr/local/cuda/lib64
   sudo chmod a+r /usr/local/cuda/include/cudnn*.h /usr/local/cuda/lib64/libcudnn*

   sudo apt install nvidia-cuda-toolkit
   nvcc --version

   conda create --name gta python=3.8
   conda activate gta
   pip install tensorflow_gpu==2.10.0

   테스트 
   import tensorflow as tf
   from tensorflow.python.client import device_lib
   print(device_lib.list_local_devices())
   print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))

```
