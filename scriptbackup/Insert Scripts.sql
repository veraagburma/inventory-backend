

--===========================> Item
INSERT INTO item (itemcode,itemcategory,itemname,itemremarks,createdby,createddate,updatedby,updateddate) VALUES
	 ('C001','Camisole','Silky Satin Camisole - Straight Neck','C1 and C1.1 has the same price. Didn''t split in PO.','Vera','2025-08-03 20:06:27.631',NULL,'2025-11-18 20:39:29.316'),
	 ('C001.1','Camisole','Silky Satin Camisole - Cross Back','C1 and C1.1 has the same price','Vera','2025-08-03 20:09:18.57',NULL,'2025-11-18 20:39:39.555'),
	 ('C002.1','Camisole','Plain Ribbed Tank Top','Once OOO, will discontinue','Vera','2025-08-03 20:22:55.588',NULL,'2025-08-03 20:09:18'),
	 ('C002.2','Camisole','Padded Cotton Camisole - Plus Size Crampled','Once OOO, will discontinue. Too crumpled & can''t be ironed','Vera','2025-08-03 20:06:45.514',NULL,'2025-08-03 20:06:45'),
	 ('C003','Camisole','Padded Ribbed Tank Top with Built-in Bra','','Vera','2025-08-03 20:09:06.499',NULL,'2025-08-03 20:09:06'),
	 ('C004','Camisole','Knitted Camisole Tank','','Vera','2025-08-03 20:09:26.872',NULL,'2025-08-03 20:09:26'),
	 ('C005','Camisole','Padded Cotton Cropped Top - Straight Neck','Fashline','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('C006','Camisole','Padded Ribbed Camisole - Vest','Fashline','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('C007','Camisole','Padded Cotton Camisole - Low U Back','Fashline','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('C008','Camisole','Padded Ribbed Camisole - Hallow','Fashline','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('S001','Shirt','Wrinkle Cotton & Linen Shirt','','Vera','2025-08-03 20:09:31.457',NULL,'2025-11-18 20:40:14.33'),
	 ('Sample','Sample','N/A','','Vera','2025-08-03 20:06:27.631',NULL,'2025-08-03 20:06:27'),
	 ('T001','T-shirt','Black Cat (Like Pocket)','','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('T002','T-shirt','Nerdy Cat','','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('T003','T-shirt','Capybara - Not Mad','Big Print','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('T003.1','T-shirt','Capybara - Not Mad (Small Print)','Small Print','Vera','2025-08-03 20:09:31.457',NULL,'2025-11-18 20:40:35.008'),
	 ('T004','T-shirt','Capybara - Quack','Big Print','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('T005','T-shirt','Puppy - Cuteness is My Alibi','Dog - custom shirt. Print out not good','Vera','2025-08-03 20:09:31.457',NULL,'2025-11-18 20:40:52.925'),
	 ('T006.1','T-shirt','3x3 Panda','','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('T006.2','T-shirt','3x3 Cat','','Vera','2025-08-03 20:09:31.457',NULL,'2025-08-03 20:09:31'),
	 ('X001.1','Stationary','Soft Big Pencil Case - Capy','',NULL,'2025-11-18 20:37:08.17',NULL,'2025-11-18 20:37:08.17'),
	 ('X001.2','Stationary','Soft Big Pencil Case - Panda','',NULL,'2025-11-18 20:37:21.319',NULL,'2025-11-18 20:37:21.319'),
	 ('X001.3','Stationary','Soft Big Pencil Case - Cat','',NULL,'2025-11-18 20:37:32.93',NULL,'2025-11-18 20:37:32.93'),
	 ('X002.1','Stationary','Kid Pencil Case - Capy','',NULL,'2025-11-18 20:37:44.781',NULL,'2025-11-18 20:37:44.781'),
	 ('X002.2','Camisole','Kid Pencil Case - Panda','',NULL,'2025-11-18 20:37:56.875',NULL,'2025-11-18 20:37:56.875'),
	 ('X003.1','Stationary','White Case - Capy','',NULL,'2025-11-18 20:38:06.98',NULL,'2025-11-18 20:38:06.98'),
	 ('X003.2','Stationary','White Case - Panda','',NULL,'2025-11-18 20:38:18.437',NULL,'2025-11-18 20:38:18.437'),
	 ('Z001.1','Stationary','Chubby Push Button Pen - Capy','',NULL,'2025-11-18 20:36:26.288',NULL,'2025-11-18 20:36:26.288'),
	 ('Z001.2','Stationary','Chubby Push Button Pen - Panda','',NULL,'2025-11-18 20:36:55.134',NULL,'2025-11-18 20:36:55.134');




--===========================> ItemVariant
-- INSERT INTO ItemVariant (ItemCode,Size,Color,Barcode,UnitPrice,ItemRemarks,CreatedBy,CreatedDate,UpdatedBy,UpdatedDate) VALUES
-- INSERT INTO public.itemvariant (sku, itemcode, size, color, barcode, unitprice, itemremarks, createdby, createddate, updatedby, updateddate)

INSERT INTO itemvariant (ItemCode,Size,Color) values
('C001','L','BeanPasteGreen'),
('C001','L','Beige'),
('C001','L','Black'),
('C001','L','DustyBlue'),
('C001','L','White'),
('C001','M','BeanPasteGreen'),
('C001','M','Beige'),
('C001','M','Black'),
('C001','M','DustyBlue'),
('C001','M','White'),
('C001','XL','BeanPasteGreen'),
('C001','XL','Beige'),
('C001','XL','Black'),
('C001','XL','DustyBlue'),
('C001','XL','White'),
('C001','XXL','BeanPasteGreen'),
('C001','XXL','Beige'),
('C001','XXL','Black'),
('C001','XXL','DustyBlue'),
('C001','XXL','White'),

('C001.1','L','Beige'),
('C001.1','L','Black'),
('C001.1','M','Beige'),
('C001.1','M','Black'),
('C001.1','XL','Beige'),
('C001.1','XL','Black'),
('C001.1','XXL','Beige'),
('C001.1','XXL','Black'),

('C002.1', 'L', 'Gray'),
('C002.1', 'L', 'White'),
('C002.1', 'M', 'Gray'),
('C002.1', 'M', 'White'),
('C002.1', 'XL', 'Gray'),
('C002.1', 'XL', 'White'),
('C002.1', 'XXL', 'Gray'),
('C002.1', 'XXL', 'White'),

('C002.2', 'L', 'Apricot'),
('C002.2', 'XL', 'Apricot'),
('C002.2', 'XXL', 'Apricot'),
('C002.2', 'L', 'White'),
('C002.2', 'XL', 'White'),

('C003','OneSize','Black'),
('C003','OneSize','Brown'),
('C003','OneSize','Gray'),
('C003','OneSize','White'),

('C004','L','FruitGreen'),
('C004','L','Khaki'),
('C004','L','Purple'),
('C004','M','FruitGreen'),
('C004','M','Khaki'),
('C004','M','Purple'),

('C005','L','Black'),
('C005','L','Green'),
('C005','L','Purple'),
('C005','L','White'),
('C005','XL','Black'),
('C005','XL','Green'),
('C005','XL','Purple'),
('C005','XL','White'),

('C006','L','DarkGray'),
('C006','L','LightApricot'),
('C006','L','White'),
('C006','M','DarkGray'),
('C006','M','LightApricot'),
('C006','M','White'),
('C006','XL','DarkGray'),
('C006','XL','LightApricot'),
('C006','XL','White'),

('C007','M','LightGray'),
('C007','L','LightGray'),
('C007','XL','LightGray'),
('C007','M','Black'),
('C007','L','Black'),
('C007','XL','Black'),
('C007','M','White'),
('C007','L','White'),
('C007','XL','White'),

('C008','M','Black'),
('C008','L','Black'),
('C008','XL','Black'),
('C008','M','White'),
('C008','L','White'),
('C008','XL','White'),
('C008','M','Gray'),
('C008','L','Gray'),
('C008','XL','Gray'),

('S001','L','Blue'),
('S001','L','White'),
('S001','XL','Blue'),
('S001','XL','White'),
('S001','XXL','Blue'),
('S001','XXL','White'),
('S001','XXXL','Blue'),
('S001','XXXL','White'),

('T001','L','Black'),
('T001','L','Gray'),
('T001','L','Khaki'),
('T001','L','White'),
('T001','M','Black'),
('T001','M','Gray'),
('T001','M','Khaki'),
('T001','M','White'),
('T001','XL','Black'),
('T001','XL','Gray'),
('T001','XL','Khaki'),
('T001','XL','White'),
('T001','XXL','Black'),
('T001','XXL','Gray'),
('T001','XXL','Khaki'),
('T001','XXL','White'),

('T002','L','DarkGray'),
('T002','L','White'),
('T002','M','DarkGray'),
('T002','M','White'),
('T002','XL','DarkGray'),
('T002','XL','White'),
('T002','XXL','DarkGray'),
('T002','XXL','White'),


('T003','L','Khaki'),
('T003','L','White'),
('T003','M','Khaki'),
('T003','M','White'),
('T003','S','Khaki'),
('T003','S','White'),
('T003','XL','Khaki'),
('T003','XL','White'),
('T003','XXL','Khaki'),
('T003','XXL','White'),


('T003','M','Black'),


('T003.1','L','Gray'),
('T003.1','L','Khaki'),
('T003.1','M','Gray'),
('T003.1','M','Khaki'),
('T003.1','S','Gray'),
('T003.1','S','Khaki'),
('T003.1','XL','Gray'),
('T003.1','XL','Khaki'),
('T003.1','XXL','Gray'),
('T003.1','XXL','Khaki'),


('T004','L','Khaki'),
('T004','L','White'),
('T004','M','Khaki'),
('T004','M','White'),
('T004','S','Khaki'),
('T004','S','White'),
('T004','XL','Khaki'),
('T004','XL','White'),
('T004','XXL','Khaki'),
('T004','XXL','White'),

('T005','L','Gray'),
('T005','L','Khaki'),
('T005','M','Gray'),
('T005','M','Khaki'),
('T005','S','Gray'),
('T005','S','Khaki'),
('T005','XL','Gray'),
('T005','XL','Khaki'),
('T005','XXL','Gray'),
('T005','XXL','Khaki'),

('T006.1','L','Gray'),
('T006.1','L','Khaki'),
('T006.1','M','Gray'),
('T006.1','M','Khaki'),
('T006.1','S','Gray'),
('T006.1','S','Khaki'),
('T006.1','XL','Gray'),
('T006.1','XL','Khaki'),
('T006.1','XXL','Gray'),
('T006.1','XXL','Khaki'),
('T006.2','L','Gray'),
('T006.2','L','Khaki'),
('T006.2','M','Gray'),
('T006.2','M','Khaki'),
('T006.2','S','Gray'),
('T006.2','S','Khaki'),
('T006.2','XL','Gray'),
('T006.2','XL','Khaki'),
('T006.2','XXL','Gray'),
('T006.2','XXL','Khaki'),

('Sample', 'N/A', 'N/A');

INSERT INTO itemvariant (itemcode,"size",color,barcode,itemremarks,createdby,createddate,updatedby,updateddate) VALUES
	 ('X001.1','Capybara','Brown',NULL,'','','2025-11-18 20:53:39.692','','2025-11-18 20:53:39.692'),
	 ('X001.2','Panda','White',NULL,'White','','2025-11-18 20:53:58.037','','2025-11-18 20:53:58.037'),
	 ('X001.3','Cat','Black',NULL,'','','2025-11-18 20:54:09.571','','2025-11-18 20:54:09.571'),
	 ('X002.1','Capybara','Brown',NULL,'','','2025-11-18 20:54:27.44','','2025-11-18 20:54:27.44'),
	 ('X002.2','Panda','Green',NULL,'','','2025-11-18 20:55:06.373','','2025-11-18 20:55:06.373'),
	 ('X003.1','Capybara','White',NULL,'','','2025-11-18 20:55:19.414','','2025-11-18 20:55:19.414'),
	 ('X003.2','Panda','White',NULL,'','','2025-11-18 20:55:24.293','','2025-11-18 20:55:24.293'),
	 ('Z001.1','Capybara','Brown',NULL,'','','2025-11-18 20:55:31.427','','2025-11-18 20:55:31.427'),
	 ('Z001.2','Panda','Green',NULL,'','','2025-11-18 20:55:39.729','','2025-11-18 20:55:39.729');

--===========================> purchaseorder

insert into purchaseorder (supplierid,platformid,podate,ponumber,totalcostcny,totalcostsgd,discount,quantity,shippingcost,shippingtype,shippingdate,postatus,remarks,createdby,createddate,updatedby,updateddate) values
(2, 1, CURRENT_DATE, '2342311', 53, 12, 0.8,4,1.3,'Direct Shipping', CURRENT_DATE, 'Paid', 'N/A', 'Michelle', CURRENT_DATE, 'Michella', CURRENT_DATE);

insert into purchaseorderitem (poid,sku,size,color,subquantity,remarks,createdby,createddate,updatedby,updateddate) values
(1, 'C001-BeanPasteGreen-M', 'M', 'BeanPasteGreen', 4, 'silky satin', 'DD', CURRENT_DATE, 'BB', CURRENT_DATE);
insert into purchaseorderitem (poid,sku,size,color,subquantity,remarks,createdby,createddate,updatedby,updateddate) values
(1, 'C001-Beige-M', 'M', 'Beige', 2, 'silky satin', 'DD', CURRENT_DATE, 'BB', CURRENT_DATE);



--===========================> Platform
INSERT INTO Platform (PlatformName,PlatformType,CreatedBy,CreatedDate,UpdatedBy,UpdatedDate) VALUES
	 ('Shopee','B2C','Creator',NULL,'Updater',NULL),
	 ('Tiktok','B2C','Creator',NULL,'Updater',NULL),
	 ('1688','B2B','Creator',NULL,'Updater',NULL),
	 ('Taobao','B2B','Creator',NULL,'Updater',NULL);

--===========================> Supplier
INSERT INTO supplier (suppliername,suppliercname,supplieraddress,supplierremarks,createdby,createddate,updatedby,updateddate) VALUES
	 ('sd','d','sd','s',NULL,'2025-10-28 15:15:05.016',NULL,'2025-10-28 15:15:05.016'),
	 ('Hong Kong Fashion Shopping','香港潮流购','','',NULL,'2025-10-28 15:58:49.377',NULL,'2025-10-28 15:58:49.377'),
	 ('High-end cashmere factory outlet store','高端羊绒工厂直销店','','',NULL,'2025-10-28 15:58:58.839',NULL,'2025-10-28 15:58:58.839'),
	 ('Gangpei - Hong Kong Wear','港佩服饰','','',NULL,'2025-10-28 15:59:22.82',NULL,'2025-10-28 15:59:22.82'),
	 ('YY trendy boutique women''s clothing selection','YY潮流精品女装严选','','',NULL,'2025-10-28 15:59:35.688',NULL,'2025-10-28 15:59:35.688'),
	 ('ADERAJAR ADERERRO','','','',NULL,'2025-10-28 15:59:42.276',NULL,'2025-10-28 15:59:42.276'),
	 ('YC Lemon Wardrobe','YC柠萌衣橱','','',NULL,'2025-10-28 15:59:52.874',NULL,'2025-10-28 15:59:52.874'),
	 ('Yiren Light Mature Women''s Clothing','伊人轻熟女装','','',NULL,'2025-10-28 16:00:01.06',NULL,'2025-10-28 16:00:01.06'),
	 ('High-end knitwear factory outlet store','高端针织工厂直销店','','',NULL,'2025-10-28 16:00:12.619',NULL,'2025-10-28 16:00:12.619'),
	 ('Miss Anna''s Fashion Store','安娜小姐的时装店','','',NULL,'2025-10-28 16:00:30.957',NULL,'2025-10-28 16:00:30.957');
INSERT INTO supplier (suppliername,suppliercname,supplieraddress,supplierremarks,createdby,createddate,updatedby,updateddate) VALUES
	 ('One Foot Sunshine Women''s Clothing ','一尺阳光 厂家女装','','',NULL,'2025-10-28 16:00:39.799',NULL,'2025-10-28 16:00:39.799'),
	 ('Wan Aixiao plus size women''s clothing','万艾肖大码女装','','',NULL,'2025-10-28 16:00:47.599',NULL,'2025-10-28 16:00:47.599'),
	 ('Yunfei Flagship Store','运绯旗舰店','','',NULL,'2025-10-28 16:00:58.548',NULL,'2025-10-28 16:00:58.548'),
	 ('FashiLine Store','菲诗奈旗舰店','','',NULL,'2025-10-28 16:01:07.072',NULL,'2025-10-28 16:01:07.072'),
	 ('Xiaoxin''s Home is Updated Every Day','小新家 每天上新','','',NULL,'2025-10-28 16:01:29.613',NULL,'2025-10-28 16:01:29.613'),
	 ('Hong Kong Impression Man','港岛印象男','','',NULL,'2025-10-28 16:01:39.496',NULL,'2025-10-28 16:01:39.496'),
	 ('Guangzhou Yijiayi Clothing 1733','广州壹家壹服饰1733','','',NULL,'2025-10-28 16:01:48.992',NULL,'2025-10-28 16:01:48.992'),
	 ('Dongyang Jiye Knitting','东阳市极野针织有限公司','','',NULL,'2025-10-28 16:01:58.888',NULL,'2025-10-28 16:01:58.888'),
	 ('Zhucheng Jinjie Garment','诸城市金杰服装厂','','',NULL,'2025-10-28 16:02:12.475',NULL,'2025-10-28 16:02:12.475'),
	 ('High-end cashmere factory direct sales','','','',NULL,'2025-10-28 16:02:32.558',NULL,'2025-10-28 16:02:32.558');
INSERT INTO supplier (suppliername,suppliercname,supplieraddress,supplierremarks,createdby,createddate,updatedby,updateddate) VALUES
	 ('Brother is Also Very Artistic','哥也很文艺','','',NULL,'2025-10-28 16:02:46.197',NULL,'2025-10-28 16:02:46.197'),
	 ('Shantou Chaoyang Guiyu Diefeiyu Knitted Factory ','汕头市潮阳区贵屿蝶飞语针织内衣厂','','',NULL,'2025-10-28 16:02:54.929',NULL,'2025-10-28 16:02:54.929'),
	 ('Jieyang Yemi Trading','揭阳市也米贸易有限公司','','',NULL,'2025-10-28 16:03:06.098',NULL,'2025-10-28 16:03:06.098'),
	 ('Jieyang High-end Player Trading','揭阳市高端玩家商贸有限公司','','',NULL,'2025-10-28 16:03:14.712',NULL,'2025-10-28 16:03:14.712'),
	 ('Shanghai New Clothing Textile','上海纽衣纺织品有限公司','','',NULL,'2025-10-28 16:03:22.818',NULL,'2025-10-28 16:03:22.818'),
	 ('Hebei Ruiku Clothing Co., Ltd.','河北锐酷服饰有限公司','','',NULL,'2025-10-28 16:03:32.74',NULL,'2025-10-28 16:03:32.74');


  