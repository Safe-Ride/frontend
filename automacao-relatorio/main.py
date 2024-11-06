from os import environ
from selenium import webdriver
from selenium.common import TimeoutException, ElementNotInteractableException
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys


chrome_options = Options()
chrome_options.add_argument("--headless")
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
driver.maximize_window()

commit_message = environ.get("COMMIT_MESSAGE")
commit_author = environ.get("COMMIT_AUTHOR")
commit_author_email = environ.get("COMMIT_AUTHOR_EMAIL")
commit_author_password = environ.get("COMMIT_AUTHOR_PASSWORD")
repository_name = environ.get("REPOSITORY_NAME").split('/')[1]
commit_url = environ.get("COMMIT_URL")

print(f"Autor: {commit_author}\n Email: {commit_author_email}\n Message: {commit_message}\n Repository: {repository_name}\n commit_url: {commit_url}")


try:
    driver.get('https://moodle.sptech.school/mod/quiz/view.php?id=30413')
    print('navegador aberto')
    email = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR,'#username')))
    email.clear()
    email.send_keys(commit_author_email)

    senha = (WebDriverWait(driver, 10)).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#password')))
    senha.clear()
    senha.send_keys(environ.get('SENHA'))

    botao = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.CSS_SELECTOR,'#loginbtn')))
    botao.click()

    inicio_relatorio = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div[1]/div[3]/div/div/section/div[1]/div[3]/div/form/button')))
    inicio_relatorio.click()

    grupo = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div[1]/div[3]/div/div/section[1]/div[1]/form/div/div[1]/div[2]/div/div[2]/div[2]/div[10]/input')))
    grupo.click()

    proximo = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div[1]/div[3]/div/div/section[1]/div[1]/form/div/div[2]/input')))
    proximo.click()

    explicacao = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div[2]/div[3]/div/div/section[1]/div[1]/form/div/div[1]/div[2]/div/div[2]/div[1]/div/div[1]/div/div[2]/div')))
    escrever = ActionChains(driver)
    escrever.click(explicacao).key_down(Keys.CONTROL).send_keys('a').key_up(Keys.CONTROL).send_keys(Keys.DELETE).perform()
    escrever.send_keys(f'{repository_name}: {commit_message}').perform()

    proximo = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div[2]/div[3]/div/div/section[1]/div[1]/form/div/div[2]/input[2]')))
    proximo.click()

    explicacao = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div[2]/div[3]/div/div/section[1]/div[1]/form/div/div[1]/div[2]/div/div[2]/div[1]/div/div[1]/div/div[2]/div')))
    escrever = ActionChains(driver)
    escrever.click(explicacao).key_down(Keys.CONTROL).send_keys('a').key_up(Keys.CONTROL).send_keys(Keys.DELETE).perform()
    escrever.send_keys(f'{commit_url}').perform()

    proximo = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div[2]/div[3]/div/div/section[1]/div[1]/form/div/div[2]/input[2]')))
    proximo.click()

    explicacao = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH,'/html/body/div[2]/div[3]/div/div/section[1]/div[1]/form/div/div[1]/div[2]/div/div[2]/div[1]/div/div[1]/div/div[2]/div')))
    escrever = ActionChains(driver)
    escrever.click(explicacao).key_down(Keys.CONTROL).send_keys('a').key_up(Keys.CONTROL).send_keys(Keys.DELETE).perform()

    if "frontend" in repository_name:
        mensagem = "React: desenvolvimento de telas"
    elif "backend" in repository_name:
        mensagem = "Spring boot: desenvolvimento do backend"
    elif "database" in repository_name:
        mensagem = "Mysql: desenvolvimento do banco de dados"
    else:
        mensagem = "terraform: desenvolvemento da infraestrutura"

    escrever.send_keys('Trello: Gestão do Projeto - Kanban').send_keys(Keys.ENTER).send_keys(f'{mensagem}').perform()

    proximo = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '/html/body/div[2]/div[3]/div/div/section[1]/div[1]/form/div/div[2]/input[2]')))
    proximo.click()

except TimeoutException:
    print("Timed out waiting for page to load")
except ElementNotInteractableException:
    print("Element not interactable")
except Exception as e:
    print(e)
finally:
    driver.quit()