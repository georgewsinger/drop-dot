goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36852__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36853__i = 0, G__36853__a = new Array(arguments.length -  0);
while (G__36853__i < G__36853__a.length) {G__36853__a[G__36853__i] = arguments[G__36853__i + 0]; ++G__36853__i;}
  args = new cljs.core.IndexedSeq(G__36853__a,0);
} 
return G__36852__delegate.call(this,args);};
G__36852.cljs$lang$maxFixedArity = 0;
G__36852.cljs$lang$applyTo = (function (arglist__36854){
var args = cljs.core.seq(arglist__36854);
return G__36852__delegate(args);
});
G__36852.cljs$core$IFn$_invoke$arity$variadic = G__36852__delegate;
return G__36852;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36855__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36856__i = 0, G__36856__a = new Array(arguments.length -  0);
while (G__36856__i < G__36856__a.length) {G__36856__a[G__36856__i] = arguments[G__36856__i + 0]; ++G__36856__i;}
  args = new cljs.core.IndexedSeq(G__36856__a,0);
} 
return G__36855__delegate.call(this,args);};
G__36855.cljs$lang$maxFixedArity = 0;
G__36855.cljs$lang$applyTo = (function (arglist__36857){
var args = cljs.core.seq(arglist__36857);
return G__36855__delegate(args);
});
G__36855.cljs$core$IFn$_invoke$arity$variadic = G__36855__delegate;
return G__36855;
})()
;

return null;
});
