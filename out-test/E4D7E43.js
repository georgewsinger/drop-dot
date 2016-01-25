goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42514__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42515__i = 0, G__42515__a = new Array(arguments.length -  0);
while (G__42515__i < G__42515__a.length) {G__42515__a[G__42515__i] = arguments[G__42515__i + 0]; ++G__42515__i;}
  args = new cljs.core.IndexedSeq(G__42515__a,0);
} 
return G__42514__delegate.call(this,args);};
G__42514.cljs$lang$maxFixedArity = 0;
G__42514.cljs$lang$applyTo = (function (arglist__42516){
var args = cljs.core.seq(arglist__42516);
return G__42514__delegate(args);
});
G__42514.cljs$core$IFn$_invoke$arity$variadic = G__42514__delegate;
return G__42514;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42517__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42518__i = 0, G__42518__a = new Array(arguments.length -  0);
while (G__42518__i < G__42518__a.length) {G__42518__a[G__42518__i] = arguments[G__42518__i + 0]; ++G__42518__i;}
  args = new cljs.core.IndexedSeq(G__42518__a,0);
} 
return G__42517__delegate.call(this,args);};
G__42517.cljs$lang$maxFixedArity = 0;
G__42517.cljs$lang$applyTo = (function (arglist__42519){
var args = cljs.core.seq(arglist__42519);
return G__42517__delegate(args);
});
G__42517.cljs$core$IFn$_invoke$arity$variadic = G__42517__delegate;
return G__42517;
})()
;

return null;
});
