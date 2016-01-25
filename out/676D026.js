goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__280035__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__280035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__280036__i = 0, G__280036__a = new Array(arguments.length -  0);
while (G__280036__i < G__280036__a.length) {G__280036__a[G__280036__i] = arguments[G__280036__i + 0]; ++G__280036__i;}
  args = new cljs.core.IndexedSeq(G__280036__a,0);
} 
return G__280035__delegate.call(this,args);};
G__280035.cljs$lang$maxFixedArity = 0;
G__280035.cljs$lang$applyTo = (function (arglist__280037){
var args = cljs.core.seq(arglist__280037);
return G__280035__delegate(args);
});
G__280035.cljs$core$IFn$_invoke$arity$variadic = G__280035__delegate;
return G__280035;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__280038__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__280038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__280039__i = 0, G__280039__a = new Array(arguments.length -  0);
while (G__280039__i < G__280039__a.length) {G__280039__a[G__280039__i] = arguments[G__280039__i + 0]; ++G__280039__i;}
  args = new cljs.core.IndexedSeq(G__280039__a,0);
} 
return G__280038__delegate.call(this,args);};
G__280038.cljs$lang$maxFixedArity = 0;
G__280038.cljs$lang$applyTo = (function (arglist__280040){
var args = cljs.core.seq(arglist__280040);
return G__280038__delegate(args);
});
G__280038.cljs$core$IFn$_invoke$arity$variadic = G__280038__delegate;
return G__280038;
})()
;

return null;
});
