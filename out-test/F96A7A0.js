goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__74556__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__74556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74557__i = 0, G__74557__a = new Array(arguments.length -  0);
while (G__74557__i < G__74557__a.length) {G__74557__a[G__74557__i] = arguments[G__74557__i + 0]; ++G__74557__i;}
  args = new cljs.core.IndexedSeq(G__74557__a,0);
} 
return G__74556__delegate.call(this,args);};
G__74556.cljs$lang$maxFixedArity = 0;
G__74556.cljs$lang$applyTo = (function (arglist__74558){
var args = cljs.core.seq(arglist__74558);
return G__74556__delegate(args);
});
G__74556.cljs$core$IFn$_invoke$arity$variadic = G__74556__delegate;
return G__74556;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__74559__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__74559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74560__i = 0, G__74560__a = new Array(arguments.length -  0);
while (G__74560__i < G__74560__a.length) {G__74560__a[G__74560__i] = arguments[G__74560__i + 0]; ++G__74560__i;}
  args = new cljs.core.IndexedSeq(G__74560__a,0);
} 
return G__74559__delegate.call(this,args);};
G__74559.cljs$lang$maxFixedArity = 0;
G__74559.cljs$lang$applyTo = (function (arglist__74561){
var args = cljs.core.seq(arglist__74561);
return G__74559__delegate(args);
});
G__74559.cljs$core$IFn$_invoke$arity$variadic = G__74559__delegate;
return G__74559;
})()
;

return null;
});
