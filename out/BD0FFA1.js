goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__300143__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__300143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300144__i = 0, G__300144__a = new Array(arguments.length -  0);
while (G__300144__i < G__300144__a.length) {G__300144__a[G__300144__i] = arguments[G__300144__i + 0]; ++G__300144__i;}
  args = new cljs.core.IndexedSeq(G__300144__a,0);
} 
return G__300143__delegate.call(this,args);};
G__300143.cljs$lang$maxFixedArity = 0;
G__300143.cljs$lang$applyTo = (function (arglist__300145){
var args = cljs.core.seq(arglist__300145);
return G__300143__delegate(args);
});
G__300143.cljs$core$IFn$_invoke$arity$variadic = G__300143__delegate;
return G__300143;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__300146__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__300146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__300147__i = 0, G__300147__a = new Array(arguments.length -  0);
while (G__300147__i < G__300147__a.length) {G__300147__a[G__300147__i] = arguments[G__300147__i + 0]; ++G__300147__i;}
  args = new cljs.core.IndexedSeq(G__300147__a,0);
} 
return G__300146__delegate.call(this,args);};
G__300146.cljs$lang$maxFixedArity = 0;
G__300146.cljs$lang$applyTo = (function (arglist__300148){
var args = cljs.core.seq(arglist__300148);
return G__300146__delegate(args);
});
G__300146.cljs$core$IFn$_invoke$arity$variadic = G__300146__delegate;
return G__300146;
})()
;

return null;
});
