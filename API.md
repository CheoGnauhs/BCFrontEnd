# API列表  

如未特别说明，请求和响应格式都是 JSON。

## 用户操作

### 新建用户

- 方法：`POST`
- 路径：`/api/users`
- 参数
  - `handle`（用户名）
  - `password`
  - `password_confirmation`
  - `location`
  - `email`
  - `telephone`
- 响应
  - `handle`
  - `location`
  - `email`
  - `telephone`
  - `token`
  - `expire_at`（登录态结束时间，零时区）

## 登录态操作

### 登录

- 方法 `POST`
- 路径 `/api/sessions`
- 参数
  - `handle`
  - `password`
- 响应
  - `token`
  - `expire_at`

## 商品类操作

### 发布商品

- 方法 `POST`
- 路径 `/api/items`
- 参数
  - `name`
  - `description`
  - `image`
  - `price`
  - `tags`（字符串数组，表示每个标签的名字）
- 响应（如果创建成功，和请求参数相同）

### 获取商品列表

- 方法 `GET`
- 路径 `/api/items`
- 响应
  - 数组
    - `name`
    - `description`
    - `image`
    - `price`
    - `tags`（数组）
    - `created_at`
    - `seller`
      - `name`

### 搜索商品

- 方法 `GET`
- 路径 `/api/items/search`
- 响应（同商品列表）

### 收藏商品

- 方法 `POST`
- 路径 `/api/items/:item_id/collection`

### 取消收藏商品

- 方法 `DELETE`
- 路径 `/api/items/:item_id/collection`

## 订单

### 发起订单

- 方法 `POST`
- 路径 `/api/orders`
- 参数
  - `item_id`
- 响应
  - `order_id`
  - `item_id`
  - `status`
  - `created_at`

### 取消订单

- 方法 `POST`
- 路径 `/api/orders/:order_id/cancellation`
- 响应
  - `order_id`
  - `item_id`
  - `status`

### 查看订单信息

- 方法 `GET`
- 路径 `/api/orders/:order_id`
- 响应
  - `id`
  - `item`
    - `name`
    - `id`
    - `price`
  - `express_no`
  - `status`
  - `created_at`
  - `updated_at`

### 变更交易状态

---

##用户 /user  
  * 新建用户(注册)  
    POST:  
    request: username, password, email, telephone  
    response: **status**  
  * 获取用户信息  
    GET:  
    request: username  
    response: email, telephone, location, credit_info(区块链上计算出的信用评分), wallet_balance(钱包余额)  
  * 更新用户信息  
    PUT:  username, password, email, telephone, location  
    request: **status**  

##Session /login  
  * 登陆  
    request: username, password  
    response: **status**  

##商品 /item  
  * 新建商品  
    POST:  
    request: name, description, image, tags, price, type(出售方式), seller   
    response: **status**  

##首页推荐商品 /items (糊就完事了，随便从数据库选几个出来)  
  * GET:  
    request:  
    response: [{item_image, item_name, item_price, item_seller}]  

##搜索商品 /search  
  * GET:  
    request: key_name  
    response: [{item_image, item_name, item_price, item_seller}]  

##收藏 /collect  
  * 新建收藏  
    POST:  
    request: user_id, item_id  
    response: **status**  
  * 删除收藏  
    DELETE:  
    request: user_id, item_id (发送用户id和对应的商品id,删除对应收藏的关系(不好意思,我不知道是不是这样实现...)  
    response: **status**  

##交易 /tran  
  * 新建交易  
    POST:  
    request: seller, buyer, create_time  
    response: **status**  
  * 删除交易  
    DELETE:  
    request: tran_id  
    response: **status**  
  * 获取交易详情
    GET:  
    request: tran_id  
    response: item_name, item_image, item_price, tran_status(进行中/已完成), express_id(快递号)  
  * 更改交易状态  
    一个交易需要买家确认，才能转为“已完成”状态。商品出售方式若为快递，卖家可填写快递号。  
    PUT:  
    request: tran_id, item_status, express_id  
    response: **status**  

##用户的购买 /buy  
  * 获取用户所有购买的订单  
    GET:  
    request: user_id  
    response: [{item_name, item_image, item_price, item_status}, {...}]  

##用户的出售
  * 获取用户所有出售的订单  
    GET:  
    request: user_id  
    response: [{item_name, item_image, item_price, item_status}, {...}]   

##评论 /comment  
  * 新建评论  
    POST:
    request: username, user_image, content, create_at, response(这条评论的回复)
    response: **status**
  * 获取评论  
    GET:  
    request: item_id  
    response: [{username, user_image, content, create_at, response}, {...}]  
