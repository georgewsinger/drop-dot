goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27177__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27177 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27178__i = 0, G__27178__a = new Array(arguments.length -  0);
while (G__27178__i < G__27178__a.length) {G__27178__a[G__27178__i] = arguments[G__27178__i + 0]; ++G__27178__i;}
  args = new cljs.core.IndexedSeq(G__27178__a,0);
} 
return G__27177__delegate.call(this,args);};
G__27177.cljs$lang$maxFixedArity = 0;
G__27177.cljs$lang$applyTo = (function (arglist__27179){
var args = cljs.core.seq(arglist__27179);
return G__27177__delegate(args);
});
G__27177.cljs$core$IFn$_invoke$arity$variadic = G__27177__delegate;
return G__27177;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27180__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27181__i = 0, G__27181__a = new Array(arguments.length -  0);
while (G__27181__i < G__27181__a.length) {G__27181__a[G__27181__i] = arguments[G__27181__i + 0]; ++G__27181__i;}
  args = new cljs.core.IndexedSeq(G__27181__a,0);
} 
return G__27180__delegate.call(this,args);};
G__27180.cljs$lang$maxFixedArity = 0;
G__27180.cljs$lang$applyTo = (function (arglist__27182){
var args = cljs.core.seq(arglist__27182);
return G__27180__delegate(args);
});
G__27180.cljs$core$IFn$_invoke$arity$variadic = G__27180__delegate;
return G__27180;
})()
;

return null;
});
