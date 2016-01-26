goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20073__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20074__i = 0, G__20074__a = new Array(arguments.length -  0);
while (G__20074__i < G__20074__a.length) {G__20074__a[G__20074__i] = arguments[G__20074__i + 0]; ++G__20074__i;}
  args = new cljs.core.IndexedSeq(G__20074__a,0);
} 
return G__20073__delegate.call(this,args);};
G__20073.cljs$lang$maxFixedArity = 0;
G__20073.cljs$lang$applyTo = (function (arglist__20075){
var args = cljs.core.seq(arglist__20075);
return G__20073__delegate(args);
});
G__20073.cljs$core$IFn$_invoke$arity$variadic = G__20073__delegate;
return G__20073;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20076__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20077__i = 0, G__20077__a = new Array(arguments.length -  0);
while (G__20077__i < G__20077__a.length) {G__20077__a[G__20077__i] = arguments[G__20077__i + 0]; ++G__20077__i;}
  args = new cljs.core.IndexedSeq(G__20077__a,0);
} 
return G__20076__delegate.call(this,args);};
G__20076.cljs$lang$maxFixedArity = 0;
G__20076.cljs$lang$applyTo = (function (arglist__20078){
var args = cljs.core.seq(arglist__20078);
return G__20076__delegate(args);
});
G__20076.cljs$core$IFn$_invoke$arity$variadic = G__20076__delegate;
return G__20076;
})()
;

return null;
});
