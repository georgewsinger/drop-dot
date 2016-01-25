goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__270307__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__270307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__270308__i = 0, G__270308__a = new Array(arguments.length -  0);
while (G__270308__i < G__270308__a.length) {G__270308__a[G__270308__i] = arguments[G__270308__i + 0]; ++G__270308__i;}
  args = new cljs.core.IndexedSeq(G__270308__a,0);
} 
return G__270307__delegate.call(this,args);};
G__270307.cljs$lang$maxFixedArity = 0;
G__270307.cljs$lang$applyTo = (function (arglist__270309){
var args = cljs.core.seq(arglist__270309);
return G__270307__delegate(args);
});
G__270307.cljs$core$IFn$_invoke$arity$variadic = G__270307__delegate;
return G__270307;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__270310__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__270310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__270311__i = 0, G__270311__a = new Array(arguments.length -  0);
while (G__270311__i < G__270311__a.length) {G__270311__a[G__270311__i] = arguments[G__270311__i + 0]; ++G__270311__i;}
  args = new cljs.core.IndexedSeq(G__270311__a,0);
} 
return G__270310__delegate.call(this,args);};
G__270310.cljs$lang$maxFixedArity = 0;
G__270310.cljs$lang$applyTo = (function (arglist__270312){
var args = cljs.core.seq(arglist__270312);
return G__270310__delegate(args);
});
G__270310.cljs$core$IFn$_invoke$arity$variadic = G__270310__delegate;
return G__270310;
})()
;

return null;
});
