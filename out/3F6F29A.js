goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31038__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31039__i = 0, G__31039__a = new Array(arguments.length -  0);
while (G__31039__i < G__31039__a.length) {G__31039__a[G__31039__i] = arguments[G__31039__i + 0]; ++G__31039__i;}
  args = new cljs.core.IndexedSeq(G__31039__a,0);
} 
return G__31038__delegate.call(this,args);};
G__31038.cljs$lang$maxFixedArity = 0;
G__31038.cljs$lang$applyTo = (function (arglist__31040){
var args = cljs.core.seq(arglist__31040);
return G__31038__delegate(args);
});
G__31038.cljs$core$IFn$_invoke$arity$variadic = G__31038__delegate;
return G__31038;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31041__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31042__i = 0, G__31042__a = new Array(arguments.length -  0);
while (G__31042__i < G__31042__a.length) {G__31042__a[G__31042__i] = arguments[G__31042__i + 0]; ++G__31042__i;}
  args = new cljs.core.IndexedSeq(G__31042__a,0);
} 
return G__31041__delegate.call(this,args);};
G__31041.cljs$lang$maxFixedArity = 0;
G__31041.cljs$lang$applyTo = (function (arglist__31043){
var args = cljs.core.seq(arglist__31043);
return G__31041__delegate(args);
});
G__31041.cljs$core$IFn$_invoke$arity$variadic = G__31041__delegate;
return G__31041;
})()
;

return null;
});
