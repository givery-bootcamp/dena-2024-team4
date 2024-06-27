-- すでに削除済みのユーザーを5つ追加する
INSERT INTO users (name, password, created_at, updated_at, deleted_at) VALUES 
('deleted_user1', 'password', NOW(), NOW(), NOW()),
('deleted_user2', 'password', NOW(), NOW(), NOW()),
('deleted_user3', 'password', NOW(), NOW(), NOW()),
('deleted_user4', 'password', NOW(), NOW(), NOW()),
('deleted_user5', 'password', NOW(), NOW(), NOW());

-- 削除済みのツイートを削除済みユーザーに対して2つずつ追加する
-- 削除済みユーザー1に紐づくツイート
INSERT INTO posts (user_id, title, body, created_at, updated_at, deleted_at) VALUES 
((SELECT id FROM users WHERE name = 'deleted_user1'), '削除済みツイート1', 'このツイートは削除されました。', NOW(), NOW(), NOW()),
((SELECT id FROM users WHERE name = 'deleted_user1'), '削除済みツイート2', 'このツイートは削除されました。', NOW(), NOW(), NOW());

-- 削除済みユーザー2に紐づくツイート
INSERT INTO posts (user_id, title, body, created_at, updated_at, deleted_at) VALUES 
((SELECT id FROM users WHERE name = 'deleted_user2'), '削除済みツイート1', 'このツイートは削除されました。', NOW(), NOW(), NOW()),
((SELECT id FROM users WHERE name = 'deleted_user2'), '削除済みツイート2', 'このツイートは削除されました。', NOW(), NOW(), NOW());

-- 削除済みユーザー3に紐づくツイート
INSERT INTO posts (user_id, title, body, created_at, updated_at, deleted_at) VALUES 
((SELECT id FROM users WHERE name = 'deleted_user3'), '削除済みツイート1', 'このツイートは削除されました。', NOW(), NOW(), NOW()),
((SELECT id FROM users WHERE name = 'deleted_user3'), '削除済みツイート2', 'このツイートは削除されました。', NOW(), NOW(), NOW());

-- 削除済みユーザー4に紐づくツイート
INSERT INTO posts (user_id, title, body, created_at, updated_at, deleted_at) VALUES 
((SELECT id FROM users WHERE name = 'deleted_user4'), '削除済みツイート1', 'このツイートは削除されました。', NOW(), NOW(), NOW()),
((SELECT id FROM users WHERE name = 'deleted_user4'), '削除済みツイート2', 'このツイートは削除されました。', NOW(), NOW(), NOW());

-- 削除済みユーザー5に紐づくツイート
INSERT INTO posts (user_id, title, body, created_at, updated_at, deleted_at) VALUES 
((SELECT id FROM users WHERE name = 'deleted_user5'), '削除済みツイート1', 'このツイートは削除されました。', NOW(), NOW(), NOW()),
((SELECT id FROM users WHERE name = 'deleted_user5'), '削除済みツイート2', 'このツイートは削除されました。', NOW(), NOW(), NOW());

-- まだ削除していないユーザーの削除済みツイートを追加する
-- これらのツイートのIDは自動インクリメントで設定されるため、明示的にIDを指定する必要はありません

INSERT INTO posts (user_id, title, body, created_at, updated_at, deleted_at) VALUES 
(1, '削除済みツイート', 'このツイートは削除されました。', NOW(), NOW(), NOW()),
(2, '削除済みツイート', 'このツイートは削除されました。', NOW(), NOW(), NOW()),
(3, '削除済みツイート', 'このツイートは削除されました。', NOW(), NOW(), NOW()),
(4, '削除済みツイート', 'このツイートは削除されました。', NOW(), NOW(), NOW()),
(5, '削除済みツイート', 'このツイートは削除されました。', NOW(), NOW(), NOW());

-- post_idが71から80のものを削除扱いに変更し、内容も変更する
UPDATE posts SET title = '削除済みツイート', body = 'このツイートは削除されました。', deleted_at = NOW() WHERE id BETWEEN 71 AND 80;