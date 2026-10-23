# BTW 的邮件模板

粘贴到 Supabase → Authentication → Emails → Templates 里对应的那一项。
`{{ .ConfirmationURL }}` 不要改，Supabase 会把它换成真正的链接。

## Confirm signup（注册确认）

Subject：

```
确认你的 BTW 账号
```

Body：

```html
<div style="max-width:480px;margin:0 auto;padding:24px;font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#1d1d1b;line-height:1.7">
  <p style="font-size:20px;margin:0 0 16px"><b>欢迎来到 BTW</b></p>
  <p>点下面的按钮，确认这是你的邮箱，注册就完成了。</p>
  <p style="margin:24px 0"><a href="{{ .ConfirmationURL }}" style="background:#1d1d1b;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none">确认邮箱</a></p>
  <p style="color:#888;font-size:13px">如果按钮点不了，把这个链接复制到浏览器里打开：<br>{{ .ConfirmationURL }}</p>
  <p style="color:#888;font-size:13px">如果不是你注册的，忽略这封邮件就好。</p>
  <p style="color:#888;font-size:13px">BTW · Pick up English by the way</p>
</div>
```

## Reset password（重设密码）

Subject：

```
重设你的 BTW 密码
```

Body：

```html
<div style="max-width:480px;margin:0 auto;padding:24px;font-family:-apple-system,'PingFang SC','Microsoft YaHei',sans-serif;color:#1d1d1b;line-height:1.7">
  <p style="font-size:20px;margin:0 0 16px"><b>重设密码</b></p>
  <p>有人（希望是你）请求重设 BTW 账号的密码。点下面的按钮，设一个新密码。</p>
  <p style="margin:24px 0"><a href="{{ .ConfirmationURL }}" style="background:#1d1d1b;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none">设新密码</a></p>
  <p style="color:#888;font-size:13px">如果按钮点不了，把这个链接复制到浏览器里打开：<br>{{ .ConfirmationURL }}</p>
  <p style="color:#888;font-size:13px">如果不是你本人操作，忽略这封邮件，你的密码不会变。</p>
  <p style="color:#888;font-size:13px">BTW · Pick up English by the way</p>
</div>
```
