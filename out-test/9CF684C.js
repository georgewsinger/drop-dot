goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18348__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18349__i = 0, G__18349__a = new Array(arguments.length -  0);
while (G__18349__i < G__18349__a.length) {G__18349__a[G__18349__i] = arguments[G__18349__i + 0]; ++G__18349__i;}
  args = new cljs.core.IndexedSeq(G__18349__a,0);
} 
return G__18348__delegate.call(this,args);};
G__18348.cljs$lang$maxFixedArity = 0;
G__18348.cljs$lang$applyTo = (function (arglist__18350){
var args = cljs.core.seq(arglist__18350);
return G__18348__delegate(args);
});
G__18348.cljs$core$IFn$_invoke$arity$variadic = G__18348__delegate;
return G__18348;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18351__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18352__i = 0, G__18352__a = new Array(arguments.length -  0);
while (G__18352__i < G__18352__a.length) {G__18352__a[G__18352__i] = arguments[G__18352__i + 0]; ++G__18352__i;}
  args = new cljs.core.IndexedSeq(G__18352__a,0);
} 
return G__18351__delegate.call(this,args);};
G__18351.cljs$lang$maxFixedArity = 0;
G__18351.cljs$lang$applyTo = (function (arglist__18353){
var args = cljs.core.seq(arglist__18353);
return G__18351__delegate(args);
});
G__18351.cljs$core$IFn$_invoke$arity$variadic = G__18351__delegate;
return G__18351;
})()
;

return null;
});
