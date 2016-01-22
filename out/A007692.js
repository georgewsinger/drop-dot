goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44038__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44039__i = 0, G__44039__a = new Array(arguments.length -  0);
while (G__44039__i < G__44039__a.length) {G__44039__a[G__44039__i] = arguments[G__44039__i + 0]; ++G__44039__i;}
  args = new cljs.core.IndexedSeq(G__44039__a,0);
} 
return G__44038__delegate.call(this,args);};
G__44038.cljs$lang$maxFixedArity = 0;
G__44038.cljs$lang$applyTo = (function (arglist__44040){
var args = cljs.core.seq(arglist__44040);
return G__44038__delegate(args);
});
G__44038.cljs$core$IFn$_invoke$arity$variadic = G__44038__delegate;
return G__44038;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44041__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44042__i = 0, G__44042__a = new Array(arguments.length -  0);
while (G__44042__i < G__44042__a.length) {G__44042__a[G__44042__i] = arguments[G__44042__i + 0]; ++G__44042__i;}
  args = new cljs.core.IndexedSeq(G__44042__a,0);
} 
return G__44041__delegate.call(this,args);};
G__44041.cljs$lang$maxFixedArity = 0;
G__44041.cljs$lang$applyTo = (function (arglist__44043){
var args = cljs.core.seq(arglist__44043);
return G__44041__delegate(args);
});
G__44041.cljs$core$IFn$_invoke$arity$variadic = G__44041__delegate;
return G__44041;
})()
;

return null;
});
