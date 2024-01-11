-- create table carbonviusalT
 select
        carbonEmissions,
        carbonAbsorption,
        electricity,
         greenhouseGas,
        city,
        year
    ,carbonEmissions-carbonAbsorption as total
    from carbonviusal
    order by city;
-- create table carbonviusal (사군구 정렬때문에)
select
        탄소배출량 AS carbonEmissions,
        탄소흡수량 AS carbonAbsorption,
        전기 AS electricity,
        온실가스 AS greenhouseGas,
        시군구 AS city,
        년도 AS year
    ,탄소배출량-탄소흡수량 as total
    from test
    order by 시군구;


  -- create table  Forest_2022
SELECT CTPRV_NM,round(sum(NTW_CHRR_GRGS_ABQNT+
NTW_GKGO_GRNHS_GHG_ABQNT+
NTW_ZKVA_GRNHS_GHG_ABQNT+
NTW_AMSC_GRNHS_GHG_ABQNT+
NTW_MAPLF_TRE_GRGS_ABQNT+
NTW_MTSQ_GRGS_ABQNT+
NTW_STJP_GRGS_ABQNT+
NTW_TLTR_GRNHS_GHG_ABQNT+
NTW_PINE_GRNHS_GHG_ABQNT+
NTW_KRPN_GRNHS_GHG_ABQNT+
NTW_CONIFER_GRNHS_GHG_ABQNT+
NTW_HNKCP_TRE_GRGS_ABQNT+
NTW_ACTSM_GRNHS_GHG_ABQNT+
NTW_MGLOK_GRNHS_GHG_ABQNT+
NTW_OAK_GRNHS_GHG_ABQNT+
NTW_ETC_GRNHS_GHG_ABQNT+
NTW_TREE_SUM_GRNHS_GHG_ABQNT
),0) as 탄소흡수량
FROM TB_ECO_FOREST_TREE_M a
where a.STNDD_YR='2022'
group by 1 desc;
    -- create table  Forest_2021
SELECT CTPRV_NM,round(sum(NTW_CHRR_GRGS_ABQNT+
NTW_GKGO_GRNHS_GHG_ABQNT+
NTW_ZKVA_GRNHS_GHG_ABQNT+
NTW_AMSC_GRNHS_GHG_ABQNT+
NTW_MAPLF_TRE_GRGS_ABQNT+
NTW_MTSQ_GRGS_ABQNT+
NTW_STJP_GRGS_ABQNT+
NTW_TLTR_GRNHS_GHG_ABQNT+
NTW_PINE_GRNHS_GHG_ABQNT+
NTW_KRPN_GRNHS_GHG_ABQNT+
NTW_CONIFER_GRNHS_GHG_ABQNT+
NTW_HNKCP_TRE_GRGS_ABQNT+
NTW_ACTSM_GRNHS_GHG_ABQNT+
NTW_MGLOK_GRNHS_GHG_ABQNT+
NTW_OAK_GRNHS_GHG_ABQNT+
NTW_ETC_GRNHS_GHG_ABQNT+
NTW_TREE_SUM_GRNHS_GHG_ABQNT
),0) as 탄소흡수량
FROM TB_ECO_FOREST_TREE_M a
where a.STNDD_YR='2021'
group by 1 desc;
    -- create table  Forest_2020
SELECT CTPRV_NM,round(sum(NTW_CHRR_GRGS_ABQNT+
NTW_GKGO_GRNHS_GHG_ABQNT+
NTW_ZKVA_GRNHS_GHG_ABQNT+
NTW_AMSC_GRNHS_GHG_ABQNT+
NTW_MAPLF_TRE_GRGS_ABQNT+
NTW_MTSQ_GRGS_ABQNT+
NTW_STJP_GRGS_ABQNT+
NTW_TLTR_GRNHS_GHG_ABQNT+
NTW_PINE_GRNHS_GHG_ABQNT+
NTW_KRPN_GRNHS_GHG_ABQNT+
NTW_CONIFER_GRNHS_GHG_ABQNT+
NTW_HNKCP_TRE_GRGS_ABQNT+
NTW_ACTSM_GRNHS_GHG_ABQNT+
NTW_MGLOK_GRNHS_GHG_ABQNT+
NTW_OAK_GRNHS_GHG_ABQNT+
NTW_ETC_GRNHS_GHG_ABQNT+
NTW_TREE_SUM_GRNHS_GHG_ABQNT
),0) as 탄소흡수량
FROM TB_ECO_FOREST_TREE_M a
where a.STNDD_YR='2020'
group by 1 desc;
    -- create table  Forest_2019
SELECT CTPRV_NM,round(sum(NTW_CHRR_GRGS_ABQNT+
NTW_GKGO_GRNHS_GHG_ABQNT+
NTW_ZKVA_GRNHS_GHG_ABQNT+
NTW_AMSC_GRNHS_GHG_ABQNT+
NTW_MAPLF_TRE_GRGS_ABQNT+
NTW_MTSQ_GRGS_ABQNT+
NTW_STJP_GRGS_ABQNT+
NTW_TLTR_GRNHS_GHG_ABQNT+
NTW_PINE_GRNHS_GHG_ABQNT+
NTW_KRPN_GRNHS_GHG_ABQNT+
NTW_CONIFER_GRNHS_GHG_ABQNT+
NTW_HNKCP_TRE_GRGS_ABQNT+
NTW_ACTSM_GRNHS_GHG_ABQNT+
NTW_MGLOK_GRNHS_GHG_ABQNT+
NTW_OAK_GRNHS_GHG_ABQNT+
NTW_ETC_GRNHS_GHG_ABQNT+
NTW_TREE_SUM_GRNHS_GHG_ABQNT
),0) as 탄소흡수량
FROM TB_ECO_FOREST_TREE_M a
where a.STNDD_YR='2019'
group by 1 desc;


-- 메인 테이블 TB_ECO_BUILDING_2019_2022 a

-- a+b+c+d 합쳐서 만듬 test
-- create table test
select *
from a
UNION
select *
from b
UNION
select *
from c
UNION
select *
from d;



-- create table a 2022
SELECT
    SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1) AS 시군구,
    ROUND(SUM(a.SUM_GRGS_DSAMT + a.SUM_NRG_TOE_USQNT), 0) AS 탄소배출량,
    b.탄소흡수량,
    ROUND(SUM(a.SUM_GRGS_DSAMT + a.SUM_NRG_TOE_USQNT) - b.탄소흡수량, 0) AS 총계,
    ROUND(SUM(a.ELRW_TOE_USQNT), 0) AS 전기,
    ROUND(SUM(a.SUM_GRGS_DSAMT), 0) AS 온실가스,
    a.STNDD_YR as 년도
FROM TB_ECO_BUILDING_2019_2022 a
INNER JOIN Forest_2022 b ON SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1) = b.CTPRV_NM
WHERE a.STNDD_YR = '2022'
GROUP BY SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1), b.탄소흡수량, a.STNDD_YR
ORDER BY 탄소배출량 DESC, b.탄소흡수량 DESC, 총계 DESC;
-- create table b 2021
SELECT
    SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1) AS 시군구,
    ROUND(SUM(a.SUM_GRGS_DSAMT + a.SUM_NRG_TOE_USQNT), 0) AS 탄소배출량,
    b.탄소흡수량,
    ROUND(SUM(a.SUM_GRGS_DSAMT + a.SUM_NRG_TOE_USQNT) - b.탄소흡수량, 0) AS 총계,
    ROUND(SUM(a.ELRW_TOE_USQNT), 0) AS 전기,
    ROUND(SUM(a.SUM_GRGS_DSAMT), 0) AS 온실가스,
    a.STNDD_YR as 년도
FROM TB_ECO_BUILDING_2019_2022 a
INNER JOIN Forest_2021 b ON SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1) = b.CTPRV_NM
WHERE a.STNDD_YR = '2021'
GROUP BY SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1), b.탄소흡수량, a.STNDD_YR
ORDER BY 탄소배출량 DESC, b.탄소흡수량 DESC, 총계 DESC;
-- create table c 2020
SELECT
SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1) AS 시군구,
    ROUND(SUM(a.ELRW_TOE_USQNT+a.SUM_NRG_TOE_USQNT), 0) AS 탄소배출량,
    b.탄소흡수량
    ,ROUND(SUM(a.ELRW_TOE_USQNT), 0) AS 전기
    ,ROUND(SUM(a.CTY_GAS_USQNT*0.00102), 0) AS 온실가스
    ,a.STNDD_YR AS 년도
FROM TB_ECO_BUILDING_2020 a
INNER JOIN Forest_2020 b ON SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1) = b.CTPRV_NM
WHERE a.STNDD_YR = '2020'
GROUP BY SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1), b.탄소흡수량,a.STNDD_YR;
-- create table d 2019
SELECT
    SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1) AS 시군구,
    ROUND(SUM(a.SUM_GRGS_DSAMT + a.SUM_NRG_TOE_USQNT), 0) AS 탄소배출량,
    b.탄소흡수량,
    ROUND(SUM(a.SUM_GRGS_DSAMT + a.SUM_NRG_TOE_USQNT) - b.탄소흡수량, 0) AS 총계,
    ROUND(SUM(a.ELRW_TOE_USQNT), 0) AS 전기,
    ROUND(SUM(a.SUM_GRGS_DSAMT), 0) AS 온실가스,
    a.STNDD_YR as 년도
FROM TB_ECO_BUILDING_2019_2022 a
INNER JOIN Forest_2019 b ON SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1) = b.CTPRV_NM
WHERE a.STNDD_YR = '2019'
GROUP BY SUBSTR(a.LOTNO_ADDR, 1, INSTR(a.LOTNO_ADDR, ' ') - 1), b.탄소흡수량, a.STNDD_YR
ORDER BY 탄소배출량 DESC, b.탄소흡수량 DESC, 총계 DESC;

-- City
CREATE TABLE City(
	SGNG_CD int(11) NOT NULL,
	City varchar(50) NOT NULL
);
-- Member
CREATE TABLE member (
  mem_id varchar(100) NOT NULL,
  mem_pw varchar(100) DEFAULT NULL,
  mem_nm varchar(100) DEFAULT NULL,
  profile_img varchar(1000) DEFAULT NULL,
  SGNG_CD int(11) NOT NULL,
  mbti varchar(5) DEFAULT NULL,
  reg_date date DEFAULT NULL,
  email varchar(100) DEFAULT NULL,
  address varchar(1000) DEFAULT NULL,
 -- PRIMARY KEY (mem_id),
 -- UNIQUE KEY unique_email (email),
 -- KEY fk_SGNG_CD (SGNG_CD),
 -- CONSTRAINT fk_SGNG_CD FOREIGN KEY (SGNG_CD) REFERENCES City (SGNG_CD)
) ;


-- 관계설정
-- ALTER TABLE SGNG
-- ADD CONSTRAINT FK_City
-- FOREIGN KEY (SGNG_CD)
-- REFERENCES City(SGNG_CD);


-- TB_ECO_FOREST_TREE_M
CREATE TABLE TB_ECO_FOREST_TREE_M (
       CTPRV_NM                     VARCHAR(100) NOT NULL,
       SGNG_NM                      VARCHAR(100) NOT NULL,
       SGNG_CD                      VARCHAR(5) NOT NULL,
       STNDD_YR                     CHAR(4) NOT NULL,
       NTW_CHRR_QNTT                DECIMAL(23,8) NOT NULL,
       NTW_GKGO_QNTT                DECIMAL(23,8) NOT NULL,
       NTW_ZKVA_QNTT                DECIMAL(23,8) NOT NULL,
       NTW_AMSC_QNTT                DECIMAL(23,8) NOT NULL,
       NTW_MAPLF_TRE_QNTT           DECIMAL(23,8) NOT NULL,
       NTW_MTSQ_QNTT                DECIMAL(23,8) NOT NULL,
       NTW_STJP_QNTT                DECIMAL(23,8) NOT NULL,
       NTW_TLTR_QNTT                DECIMAL(23,8) NOT NULL,
       NTW_PINE_QNTT                DECIMAL(23,8) NOT NULL,
       NTW_KRPN_QNTT                DECIMAL(23,8) NOT NULL,
       NTW_CONIFER_QNTT             DECIMAL(23,8) NOT NULL,
       NTW_HNKCP_TRE_QNTT           DECIMAL(23,8) NOT NULL,
       NTW_ACTSM_QNTT               DECIMAL(23,8) NOT NULL,
       NTW_MGLOK_QNTT               DECIMAL(23,8) NOT NULL,
       NTW_OAK_QNTT                 DECIMAL(23,8) NOT NULL,
       NTW_ETC_QNTT                 DECIMAL(23,8) NOT NULL,
       NTW_CHRR_GRGS_ABQNT          DECIMAL(23,8) NOT NULL,
       NTW_GKGO_GRNHS_GHG_ABQNT     DECIMAL(23,8) NOT NULL,
       NTW_ZKVA_GRNHS_GHG_ABQNT     DECIMAL(23,8) NOT NULL,
       NTW_AMSC_GRNHS_GHG_ABQNT     DECIMAL(23,8) NOT NULL,
       NTW_MAPLF_TRE_GRGS_ABQNT     DECIMAL(23,8) NOT NULL,
       NTW_MTSQ_GRGS_ABQNT          DECIMAL(23,8) NOT NULL,
       NTW_STJP_GRGS_ABQNT          DECIMAL(23,8) NOT NULL,
       NTW_TLTR_GRNHS_GHG_ABQNT     DECIMAL(23,8) NOT NULL,
       NTW_PINE_GRNHS_GHG_ABQNT     DECIMAL(23,8) NOT NULL,
       NTW_KRPN_GRNHS_GHG_ABQNT     DECIMAL(23,8) NOT NULL,
       NTW_CONIFER_GRNHS_GHG_ABQNT  DECIMAL(23,8) NOT NULL,
       NTW_HNKCP_TRE_GRGS_ABQNT     DECIMAL(23,8) NOT NULL,
       NTW_ACTSM_GRNHS_GHG_ABQNT    DECIMAL(23,8) NOT NULL,
       NTW_MGLOK_GRNHS_GHG_ABQNT    DECIMAL(23,8) NOT NULL,
       NTW_OAK_GRNHS_GHG_ABQNT      DECIMAL(23,8) NOT NULL,
       NTW_ETC_GRNHS_GHG_ABQNT      DECIMAL(23,8) NOT NULL,
       NTW_TREE_SUM_GRNHS_GHG_ABQNT DECIMAL(23,8) NOT NULL
);
-- TB_ELECTRICITY_CONSUMPTION 전기사용량

CREATE TABLE TB_ELECTRICITY_CONSUMPTION (
       YEAR       INT(4) NOT NULL,
       MONTH      CHAR(2) NOT NULL,
       METRO      VARCHAR(30) NOT NULL,
       CITY       VARCHAR(30) NOT NULL,
       HouseCnt   INT(10) NOT NULL,
       PowerUsage DECIMAL(10,2) NOT NULL,
       BILL       DECIMAL(10,2) NOT NULL
);
-- board
CREATE TABLE board (
  board_no int(10) NOT NULL,
  board_title varchar(1000),
  board_content varchar(4000) ,
  mem_id varchar(100)  NOT NULL,
  create_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  board_hit int(11) DEFAULT '0',
  del_yn varchar(1) DEFAULT 'N',
);
select *
from board_active;
ALTER TABLE board ADD CONSTRAINT fk_board FOREIGN KEY(
                        mem_id
)

-- TB_ECO_BUILDING_2019_2022
CREATE TABLE `TB_ECO_BUILDING_2019_2022` (
  LOTNO_ADDR varchar(500) DEFAULT NULL,
  ROAD_NM_ADDR varchar(500) DEFAULT NULL,
  SGNG_CD int(11) NOT NULL,
  STDG_CD varchar(10) DEFAULT NULL,
  GPS_LOT decimal(20,8) DEFAULT NULL,
  GPS_LAT decimal(20,8) DEFAULT NULL,
  LOTNO_MNO varchar(100) DEFAULT NULL,
  LOTNO_SNO varchar(100) DEFAULT NULL,
  STNDD_YR char(4) NOT NULL,
  USE_MM varchar(10) NOT NULL,
  ELRW_USQNT decimal(30,8) NOT NULL,
  CTY_GAS_USQNT decimal(30,8) NOT NULL,
  SUM_NRG_USQNT decimal(30,8) NOT NULL,
  ELRW_TOE_USQNT decimal(30,8) NOT NULL,
  CTY_GAS_TOE_USQNT decimal(30,8) NOT NULL,
  SUM_NRG_TOE_USQNT decimal(30,8) NOT NULL,
  ELRW_GRGS_DSAMT decimal(30,8) NOT NULL,
  CTY_GAS_GRGS_DSAMT decimal(30,8) NOT NULL,
  SUM_GRGS_DSAMT varchar(100) NOT NULL
);

-- freeboard
CREATE TABLE `FREE_BOARD` (
  BO_NO int(11) DEFAULT NULL,
  BO_TITLE varchar(250) DEFAULT NULL,
  BO_CATEGORY char(4) DEFAULT NULL,
  BO_WRITER varchar(100) DEFAULT NULL,
  BO_CONTENT text,
  BO_IP varchar(30) DEFAULT NULL,
  BO_HIT int(11) DEFAULT NULL,
  BO_REG_DATE datetime DEFAULT CURRENT_TIMESTAMP,
  BO_MOD_DATE datetime DEFAULT NULL,
  BO_DEL_YN char(1) DEFAULT 'N'
);

-- boardactive
CREATE TABLE board_active (
  board_no int(11) NOT NULL AUTO_INCREMENT,
  board_title varchar(1000) NOT NULL,
  board_content varchar(4000) DEFAULT NULL,
  mem_id varchar(100) DEFAULT NULL,
  create_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  update_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  active_img varchar(1000) DEFAULT NULL,
  del_yn varchar(1) DEFAULT 'N',
  act_hit int(11) DEFAULT '0',
  board_good int(11) DEFAULT '0',
  board_together int(11) DEFAULT NULL,
  board_usefull int(11) DEFAULT NULL,
  category varchar(1000) DEFAULT NULL,
 -- PRIMARY KEY (board_no),
 -- KEY fk_board_active (mem_id),
 -- CONSTRAINT fk_board_active FOREIGN KEY (mem_id) REFERENCES member (mem_id)
);

CREATE TABLE TB_ELECTRICITY_CONSUMPTION_PREDICT (
  year bigint(20) ,
  month bigint(20) ,
  metro TEXT,
  city TEXT,
  predicted_power_usage double
);
CREATE TABLE TB_USE_OF_FURNITURE (
  house text ,
  area text ,
  personnel bigint(20),
  electricity double,
  gas double ,
  water double ,
  total_amount double ,
  total_tree double
) ;








