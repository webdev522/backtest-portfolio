```
docker exec -it mariadb_db_1 bash
mysql -u root -p
create database backtest;
grant all privileges on backtest.* TO 'backtest'@'%' identified by 'BACKTESTISGOOD!';
flush privileges;
```
