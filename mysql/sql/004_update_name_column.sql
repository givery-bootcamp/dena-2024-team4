-- nameカラムをdisplay_nameカラムに変更
ALTER TABLE users CHANGE COLUMN name display_name VARCHAR(40) NOT NULL;

-- usernameカラムを追加
ALTER TABLE users ADD COLUMN username VARCHAR(40) UNIQUE AFTER id;

-- usernameカラムに一意なローマ字表記の値を設定
UPDATE users SET username = 'taro' WHERE id = 1;
UPDATE users SET username = 'hanako' WHERE id = 2;
UPDATE users SET username = 'taro_yamada' WHERE id = 3;
UPDATE users SET username = 'hanako.sato' WHERE id = 4;
UPDATE users SET username = 'john_doe' WHERE id = 5;
UPDATE users SET username = 'sakura_san' WHERE id = 6;
UPDATE users SET username = 'emma_johnson' WHERE id = 7;
UPDATE users SET username = 'akihiro_nishida' WHERE id = 8;
UPDATE users SET username = 'taro_yamada2' WHERE id = 9; -- 一意性を保つための調整
UPDATE users SET username = 'hanako_suzuki' WHERE id = 10;
UPDATE users SET username = 'john_doe2' WHERE id = 11; -- 一意性を保つための調整
UPDATE users SET username = 'jane_smith' WHERE id = 12;
UPDATE users SET username = 'sakura_sato' WHERE id = 13;
UPDATE users SET username = 'ichiro_takahashi' WHERE id = 14;
UPDATE users SET username = 'alice_jones' WHERE id = 15;
UPDATE users SET username = 'bob_brown' WHERE id = 16;
UPDATE users SET username = 'kenta_suzuki' WHERE id = 17;
UPDATE users SET username = 'yoko_tanaka' WHERE id = 18;
UPDATE users SET username = 'michael_jordan' WHERE id = 19;
UPDATE users SET username = 'chris_nakamura' WHERE id = 20;
UPDATE users SET username = 'sayuri_yamada' WHERE id = 21;
UPDATE users SET username = 'robert_wilson' WHERE id = 22;
UPDATE users SET username = 'emily_sasaki' WHERE id = 23;
UPDATE users SET username = 'james_ito' WHERE id = 24;
UPDATE users SET username = 'nancy_kimura' WHERE id = 25;
UPDATE users SET username = 'alexander_saito' WHERE id = 26;
UPDATE users SET username = 'rebecca_kato' WHERE id = 27;
UPDATE users SET username = 'william_mori' WHERE id = 28;
UPDATE users SET username = 'linda_takeuchi' WHERE id = 29;
UPDATE users SET username = 'matthew_fujita' WHERE id = 30;
UPDATE users SET username = 'david_okamoto' WHERE id = 31;
UPDATE users SET username = 'sarah_nakano' WHERE id = 32;
UPDATE users SET username = 'daniel_hara' WHERE id = 33;
UPDATE users SET username = 'jessica_ogawa' WHERE id = 34;
UPDATE users SET username = 'charles_kondo' WHERE id = 35;
UPDATE users SET username = 'mary_nakamura' WHERE id = 36;
UPDATE users SET username = 'thomas_murakami' WHERE id = 37;
UPDATE users SET username = 'elizabeth_takagi' WHERE id = 38;
UPDATE users SET username = 'joshua_kawaguchi' WHERE id = 39;
UPDATE users SET username = 'maria_yamamoto' WHERE id = 40;
UPDATE users SET username = 'ryan_ando' WHERE id = 41;
UPDATE users SET username = 'alice_matsuda' WHERE id = 42;
UPDATE users SET username = 'eric_aoki' WHERE id = 43;
UPDATE users SET username = 'catherine_morita' WHERE id = 44;
UPDATE users SET username = 'andrew_hashimoto' WHERE id = 45;
UPDATE users SET username = 'victoria_ishii' WHERE id = 46;
UPDATE users SET username = 'jacob_sano' WHERE id = 47;
UPDATE users SET username = 'irene_taniguchi' WHERE id = 48;
UPDATE users SET username = 'aaron_nishida' WHERE id = 49;
UPDATE users SET username = 'jamie_hasegawa' WHERE id = 50;
UPDATE users SET username = 'karen_miura' WHERE id = 51;
UPDATE users SET username = 'brian_kaneko' WHERE id = 52;
UPDATE users SET username = 'henry_masuda' WHERE id = 53;
UPDATE users SET username = 'amanda_fujii' WHERE id = 54;
UPDATE users SET username = 'richard_okada' WHERE id = 55;
UPDATE users SET username = 'joanna_matsumoto' WHERE id = 56;
UPDATE users SET username = 'donald_nishiyama' WHERE id = 57;
UPDATE users SET username = 'sandra_maeda' WHERE id = 58;
UPDATE users SET username = 'steven_goto' WHERE id = 59;
UPDATE users SET username = 'patrick_shiraishi' WHERE id = 60;
UPDATE users SET username = 'christina_nakayama' WHERE id = 61;
UPDATE users SET username = 'paul_ota' WHERE id = 62;
UPDATE users SET username = 'melanie_fujiwara' WHERE id = 63;
UPDATE users SET username = 'peter_shimizu' WHERE id = 64;
UPDATE users SET username = 'emily_watanabe' WHERE id = 65;
UPDATE users SET username = 'anthony_yamaguchi' WHERE id = 66;
UPDATE users SET username = 'megan_nakagawa' WHERE id = 67;
UPDATE users SET username = 'adam_kawamura' WHERE id = 68;
UPDATE users SET username = 'rose_kobayashi' WHERE id = 69;
UPDATE users SET username = 'lucas_takada' WHERE id = 70;
UPDATE users SET username = 'naomi_miyazaki' WHERE id = 71;
UPDATE users SET username = 'sebastian_otsuka' WHERE id = 72;
UPDATE users SET username = 'francis_miyoshi' WHERE id = 73;
UPDATE users SET username = 'daisy_maekawa' WHERE id = 74;
UPDATE users SET username = 'evan_matsushima' WHERE id = 75;
UPDATE users SET username = 'lydia_kamiya' WHERE id = 76;
UPDATE users SET username = 'howard_ito' WHERE id = 77;
UPDATE users SET username = 'jane_ishida' WHERE id = 78;
UPDATE users SET username = 'ethan_kawabata' WHERE id = 79;
UPDATE users SET username = 'madeline_yano' WHERE id = 80;
UPDATE users SET username = 'philip_kitamura' WHERE id = 81;
UPDATE users SET username = 'kate_nagai' WHERE id = 82;
UPDATE users SET username = 'dylan_okazaki' WHERE id = 83;
UPDATE users SET username = 'madeline_yokoyama' WHERE id = 84;
UPDATE users SET username = 'isabella_okawa' WHERE id = 85;
UPDATE users SET username = 'joel_kurita' WHERE id = 86;
UPDATE users SET username = 'sofia_harada' WHERE id = 87;
UPDATE users SET username = 'blake_soma' WHERE id = 88;
UPDATE users SET username = 'laura_ito' WHERE id = 89;
UPDATE users SET username = 'leo_kato' WHERE id = 90;
UPDATE users SET username = 'victoria_wada' WHERE id = 91;
UPDATE users SET username = 'jessica_oda' WHERE id = 92;
UPDATE users SET username = 'thomas_shibuya' WHERE id = 93; -- 重複しないように修正
UPDATE users SET username = 'elizabeth_shimada' WHERE id = 94;
UPDATE users SET username = 'joshua_toda' WHERE id = 95;
UPDATE users SET username = 'maria_takeuchi' WHERE id = 96;
UPDATE users SET username = 'ryan_arai' WHERE id = 97;
UPDATE users SET username = 'thomas_shibuya2' WHERE id = 98; -- 重複しないように修正
UPDATE users SET username = 'elizabeth_shimada2' WHERE id = 99; -- 重複しないように修正
UPDATE users SET username = 'joshua_toda2' WHERE id = 100; -- 重複しないように修正
UPDATE users SET username = 'maria_takeuchi2' WHERE id = 101; -- 重複しないように修正
UPDATE users SET username = 'ryan_arai2' WHERE id = 102; -- 重複しないように修正
UPDATE users SET username = 'deleted_user1' WHERE id = 103;
UPDATE users SET username = 'deleted_user2' WHERE id = 104;
UPDATE users SET username = 'deleted_user3' WHERE id = 105;
UPDATE users SET username = 'deleted_user4' WHERE id = 106;
UPDATE users SET username = 'deleted_user5' WHERE id = 107;

-- usernameをNOT NULLに変更
ALTER TABLE users MODIFY COLUMN username VARCHAR(40) UNIQUE NOT NULL;

INSERT INTO users (username, display_name, password) VALUES ('ktaroabobon', 'keitaro watanabe', 'password');
INSERT INTO users (username, display_name, password) VALUES ('nekohashi', 'nekohashi', 'nekohashi');
INSERT INTO users (username, display_name, password) VALUES ('ao', 'aoi yamada', 'password');
INSERT INTO users (username, display_name, password) VALUES ('shogo', 'shogo takasaki', 'password');
