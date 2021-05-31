I18n.translations || (I18n.translations = {});
I18n.translations["de"] = I18n.extend((I18n.translations["de"] || {}), JSON.parse('{"administrate":{"actions":{"back":"Zurück","confirm":"Sind Sie sicher?","destroy":"Löschen","edit":"Editieren","edit_resource":"%{name} editieren","new_resource":"%{name} erstellen","show_resource":"%{name} anzeigen"},"controller":{"create":{"success":"%{resource} wurde erfolgreich erstellt."},"destroy":{"success":"%{resource} wurde erfolgreich gelöscht."},"update":{"success":"%{resource} wurde erfolgreich aktualisiert."}},"fields":{"has_many":{"more":"%{count} von %{total_count}","none":"Keine"}},"form":{"error":"error","errors":"%{pluralized_errors} haben das Speichern dieses %{resource_name} verhindert:"},"navigation":{"back_to_app":"Zurück zur App"},"search":{"clear":"Suche zurücksetzen","label":"%{resource} durchsuchen"}},"attendance":{"absent":"Es tut uns leid, dass du nicht kommen können, aber las uns bald zusammen Bier trinken!\\n\\u003csmall class=\\"text-muted\\"\\u003eWenn du deine Meinung ändern, bitte schick uns \\u003ca href=\\"mailto:ai-et-daniel@perezmiyuki.wedding\\"\\u003eeine E-Mail\\u003c/a\\u003e\\u003c/small\\u003e\\n","confirm_no":"Kannst du wirklich nicht kommen?","confirm_yes":"Bist du sicher?","no":"Ich kann leider nicht","present":"Vielen Dank für die Bestätigung. Wir freuen uns, dich zu sehen!\\n\\u003csmall class=\\"text-muted\\"\\u003eWenn etwas passiert, bitte schik uns \\u003ca href=\\"mailto:ai-et-daniel@perezmiyuki.wedding\\"\\u003eeine E-Mail\\u003c/a\\u003e\\u003c/small\\u003e\\n","question":"Kommst du?","yes":"Ja, natürlich"},"email":{"invitation":{"subject":"Einladung zur Hochzeit von Ai und Daniel"}},"footer":"von Ai \\u0026 Daniel, mit viel ❤️","info":{"date":"der 17. Juni 2021","title":"Hochzeit von Ai \\u0026 Daniel"},"party":{"text":"Am Abend werden wir eine Party im Hôtel Raphael, neben dem Arc de Triomphe, machen"},"townhall":{"text":"Die offiziale Hochzeitszeremonie findet im Rathaus des 15. Bezirks von Paris statt"}}'));
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), JSON.parse('{"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"administrate":{"actions":{"back":"Back","confirm":"Are you sure?","destroy":"Destroy","edit":"Edit","edit_resource":"Edit %{name}","new_resource":"New %{name}","show_resource":"Show %{name}"},"controller":{"create":{"success":"%{resource} was successfully created."},"destroy":{"success":"%{resource} was successfully destroyed."},"update":{"success":"%{resource} was successfully updated."}},"fields":{"has_many":{"more":"Showing %{count} of %{total_count}","none":"None"}},"form":{"error":"error","errors":"%{pluralized_errors} prohibited this %{resource_name} from being saved:"},"navigation":{"back_to_app":"Back to app"},"search":{"clear":"Clear search","label":"Search %{resource}"}},"attendance":{"absent":"We\'re sorry you cannot make it but hope to see you soon.\\n\\u003csmall class=\\"text-muted\\"\\u003ePlease \\u003ca href=\\"mailto:ai-et-daniel@perezmiyuki.wedding\\"\\u003eemail us\\u003c/a\\u003e if you change your mind\\u003c/small\\u003e\\n","confirm_no":"Are you sure you cannot make it?","confirm_yes":"You are definitely coming?","no":"I cannot make it","present":"Thank you for confirming your attendance!\\n\\u003csmall class=\\"text-muted\\"\\u003ePlease \\u003ca href=\\"mailto:ai-et-daniel@perezmiyuki.wedding\\"\\u003eemail us\\u003c/a\\u003e if you change your mind\\u003c/small\\u003e\\n","question":"Are you coming?","yes":"I am coming"},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"email":{"invitation":{"subject":"Invitation to Ai and Daniel\'s wedding","text":"As you might already know, we are getting married in Paris on the 17th of June.\\nWe would like to invite you to share this special moment with us.\\n\\nWe would be grateful if you could confirm your attendance from the following\\nwebsite, where you will also find the details of the event.\\n\\nhttps://perezmiyuki.wedding/?token=%{token}\\n\\nWe hope to see you there!\\n\\nWith love,\\nAi \\u0026 Daniel\\n"}},"errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\\nPlease make sure a rails development server is running.\\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","blank":"can\'t be blank","confirmation":"doesn\'t match %{attribute}","empty":"can\'t be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"not_found":{"text":"Hi there,\\n\\nThis page does not seem to exist. Please check your email for the direct link.\\n\\nBest,\\nAi \\u0026amp; Daniel\\n","title":"Page not found"},"unacceptable_request":"A supported version is expected in the Accept header.\\n","unauthorized":{"text":"Hi there,\\n\\nFor privacy reasons, we are not allowing direct access to this website.\\nIf you have been invited, please check your email for a link to access it.\\n\\nBest,\\nAi \\u0026amp; Daniel\\n","title":"Not authorized"},"unavailable_session":"Session %{id} is no longer available in memory.\\n\\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\\nthis request hit doesn\'t store %{id} in memory. Consider turning the number of\\nprocesses/workers to one (1) or using a different server in development.\\n","unexpected":{"text":"Hi there,\\n\\nSome unexpected error happened, Daniel might have been a bit tired and produced sloppy code, we apologise for the trouble.\\nPlease \\u003ca href=\\"mailto:ai-et-daniel@perezmiyuki.wedding\\"\\u003eemail us\\u003c/a\\u003e if you need to contact us.\\n\\nBest,\\nAi \\u0026amp; Daniel\\n","title":"Unexpected error"}},"footer":"by Ai \\u0026 Daniel, with a lot of ❤️","helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \\u003cb\\u003e%{first}\\u0026nbsp;-\\u0026nbsp;%{last}\\u003c/b\\u003e of \\u003cb\\u003e%{total}\\u003c/b\\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \\u003cb\\u003e1\\u003c/b\\u003e %{entry_name}","other":"Displaying \\u003cb\\u003eall %{count}\\u003c/b\\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"info":{"date":"17th June 2021","title":"Ai \\u0026 Daniel\'s wedding"},"invitation":{"text":"It is our pleasure to invite you to our wedding ceremony on June 17th 2021.\\nWe appreciate this is quite short notice, especially given the current situation\\nbut we hope that you will be able to celebrate this happy event with us.\\nThe details of the event are below.\\n\\nWarm regards,\\n"},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"round_mode":"default","separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"nth":{"ordinalized":{},"ordinals":{}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"party":{"text":"We will have a cocktail party at the Hôtel Raphael, near the Champs-Elysées."},"pot":{"fiat_crypto":"If you prefer, we also accept ETH or any other asset on Ethereum.\\nSimply send it to this address:\\n","fiat_text":"We are organising a wedding pot, we hope that you can contribute a little.\\n","paypal":"Our pot is on Paypal, please use the link below and follow the instructions there.\\n","title":"Wedding Pot"},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"townhall":{"text":"The official ceremony will be held in Paris\' 15th arrondissement townhall"},"views":{"pagination":{"first":"\\u0026laquo; First","last":"Last \\u0026raquo;","next":"Next \\u0026rsaquo;","previous":"\\u0026lsaquo; Prev","truncate":"\\u0026hellip;"}}}'));
I18n.translations["fr"] = I18n.extend((I18n.translations["fr"] || {}), JSON.parse('{"administrate":{"actions":{"back":"Précédent","confirm":"Êtes-vous sûr(e) ?","destroy":"Supprimer","edit":"Modifier","edit_resource":"Modifier %{name}","new_resource":"Création %{name}","show_resource":"Détails %{name}"},"controller":{"create":{"success":"%{resource} a été correctement créé(e)."},"destroy":{"success":"%{resource} a été correctement supprimé(e)."},"update":{"success":"%{resource} a été correctement modifié(e)."}},"fields":{"has_many":{"more":"%{count} sur %{total_count}","none":"Aucun"}},"form":{"error":"erreur","errors":"%{pluralized_errors} ont empêché %{resource_name} d\'être sauvegardé(e) :"},"navigation":{"back_to_app":"Retour à l\'application"},"search":{"clear":"Effacer la recherche","label":"Chercher %{resource}"}},"attendance":{"absent":"Dommage, on aurait adoré que tu sois là, mais on se voit bientôt !\\n\\u003csmall class=\\"text-muted\\"\\u003eSi tu changes d\'avis, \\u003ca href=\\"mailto:ai-et-daniel@perezmiyuki.wedding\\"\\u003eenvoie nous un email\\u003c/a\\u003e\\u003c/small\\u003e\\n","confirm_no":"Tu est sûr que tu ne peux pas venir ?","confirm_yes":"Tu confirmes bien que tu viens ?","no":"Malheureusement pas","present":"Merci d\'avoir confirmé, on a hâte de te voir !\\n\\u003csmall class=\\"text-muted\\"\\u003eEn cas de problème, \\u003ca href=\\"mailto:ai-et-daniel@perezmiyuki.wedding\\"\\u003eenvoie nous un email\\u003c/a\\u003e\\u003c/small\\u003e\\n","question":"Est-ce que tu viens?","yes":"Bien sûr"},"email":{"invitation":{"subject":"Mariage de Ai \\u0026 Daniel","text":"Comme tu le sais déjà probablement, nous allons nous marié le 17 juin à Paris.\\nOn aimerait beaucoup pouvoir partager ce moment spécial avec toi.\\n\\nToutes les informations, ainsi qu\'un lien pour ton confirmer ta présence\\nsont disponibles sur le site ci-dessous.\\n\\nhttps://perezmiyuki.wedding/?token=%{token}\\n\\nOn espère te voir le 17 juin,\\n\\nBisous,\\nAi \\u0026 Daniel\\n"}},"footer":"par Ai \\u0026 Daniel, avec ❤️","info":{"date":"17 Juin 2021","title":"Mariage de Ai \\u0026 Daniel"},"invitation":{"text":"On a le plaisir de t\'inviter à notre cérémonie de mariage le 17 juin 2021.\\nOn sait que c\'est un peu dernière minute mais on espère que tu pourras\\nte joindre à nous pour célébrer cet heureux évènement accompagné de champagne.\\n\\nA très vite,\\n"},"party":{"text":"La fête sera célébré à l\'hôtel Raphael, à deux pas de l\'Arc de Triomphe"},"pot":{"fiat_crypto":"Si tu préfères, nous acceptons aussi ETH ou n\'importe quelle autre monnaie sur Ethereum,\\nenvoie ça à cette adresse:\\n","paypal":"Notre cagnotte est sur Paypal, utilise le lien ci-dessous et suis les instructions.\\n","text":"Nous organisons une cagnotte de mariage. On espère que tu pourras participer un peu.\\n","title":"Cagnotte de Mariage"},"townhall":{"text":"La cerémonie officielle sera célébrée à la mairie du 15ème arrondissement."}}'));
I18n.translations["fr_polite"] = I18n.extend((I18n.translations["fr_polite"] || {}), JSON.parse('{"attendance":{"absent":"C\'est dommage, mais on espère vous voir bientôt !\\n\\u003csmall class=\\"text-muted\\"\\u003eSi vous changez d\'avis, \\u003ca href=\\"mailto:ai-et-daniel@perezmiyuki.wedding\\"\\u003eenvoyez-nous nous un email\\u003c/a\\u003e\\u003c/small\\u003e\\n","confirm_no":"Vous confirmez que vous ne pourrez pas venir ?","confirm_yes":"Vous confirmez votre présence ?","no":"Non","present":"Merci pour la confirmation, nous avons hâte de vous voir !\\n\\u003csmall class=\\"text-muted\\"\\u003eEn cas de problème, \\u003ca href=\\"mailto:ai-et-daniel@perezmiyuki.wedding\\"\\u003eveuillez-nous envoyer un email\\u003c/a\\u003e\\u003c/small\\u003e\\n","question":"Serez-vous présent ?","yes":"Oui"},"email":{"invitation":{"subject":"Mariage de Ai Miyuki \\u0026 Daniel Perez","text":"Nous avons le plaisir de vous convier à notre fête de mariage qui aura lieu le 17 juin à Paris.\\n\\nVous trouverez toutes les informations nécessaires sur le site ci-dessous:\\n\\nhttps://perezmiyuki.wedding/?token=%{token}\\n\\nNous vous prions de nous confirmer votre présence depuis ce même site avant le 7 juin.\\n\\nEn espérant vous voir le 17 juin.\\n\\nAi Miyuki \\u0026 Daniel Perez\\n"}},"footer":"par Ai \\u0026 Daniel, avec ❤️","info":{"date":"17 Juin 2021","title":"Mariage de Ai \\u0026 Daniel"},"invitation":{"text":"Nous avons le plaisir de vous inviter à notre cérémonie de mariage qui aura lieu\\nle 17 juin 2021.\\nMalgré le délai relativement court, nous espérons que vous pourrez vous\\njoindre à nous pour fêter cet hereux évènement.\\n\\nDans l\'attente du plaisir vous voir,\\n"},"party":{"text":"La fête sera célébrée à l\'hôtel Raphael, à deux pas des Champs-Elysées"},"pot":{"fiat_crypto":"Pour les adeptes de la cryptomonnaie, nous acceptons aussi ETH ou n\'importe quelle autre monnaie sur Ethereum,\\nà l\'adresse suivante:\\n","paypal":"Notre cagnotte est sur Paypal, utilisez le lien ci-dessous et suivez les instructions.\\n","text":"Nous organisons une cagnotte de mariage et espérons que vous pourrez contribuer un peu.\\n","title":"Cagnotte de Mariage"},"townhall":{"text":"La cérémonie officielle sera célébrée à la mairie du 15ème arrondissement."}}'));
I18n.translations["ja"] = I18n.extend((I18n.translations["ja"] || {}), JSON.parse('{"administrate":{"actions":{"back":"戻る","confirm":"本当によろしいですか？","destroy":"削除","edit":"編集","edit_resource":"編集 %{name}","new_resource":"新規 %{name}","show_resource":"参照 %{name}"},"controller":{"create":{"success":"%{resource}を作成しました。"},"destroy":{"success":"%{resource}を削除しました。"},"update":{"success":"%{resource}を更新しました。"}},"fields":{"has_many":{"more":"%{total_count} 件中 %{count} 件表示","none":"データがありません"}},"form":{"error":"エラー","errors":"%{pluralized_errors}のため%{resource_name}を保存できません。"},"navigation":{"back_to_app":"アプリに戻る"},"search":{"clear":"検索をクリアする","label":"サーチ %{resource}"}}}'));
