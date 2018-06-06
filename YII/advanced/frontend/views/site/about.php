<?php

/* @var $this yii\web\View */

use yii\helpers\Html;

$this->title = 'About';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="site-about">
    <h1><?= Html::encode($this->title) ?></h1>

    <p>Neste semestre será desenvolvido o game SkiFree como nota parcial para a disciplina Programação paraa a Web</p>

    <code><?= __FILE__ ?></code>
</div>
