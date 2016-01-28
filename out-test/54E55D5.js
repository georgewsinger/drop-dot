goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35035__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35036__i = 0, G__35036__a = new Array(arguments.length -  0);
while (G__35036__i < G__35036__a.length) {G__35036__a[G__35036__i] = arguments[G__35036__i + 0]; ++G__35036__i;}
  args = new cljs.core.IndexedSeq(G__35036__a,0);
} 
return G__35035__delegate.call(this,args);};
G__35035.cljs$lang$maxFixedArity = 0;
G__35035.cljs$lang$applyTo = (function (arglist__35037){
var args = cljs.core.seq(arglist__35037);
return G__35035__delegate(args);
});
G__35035.cljs$core$IFn$_invoke$arity$variadic = G__35035__delegate;
return G__35035;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35038__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35039__i = 0, G__35039__a = new Array(arguments.length -  0);
while (G__35039__i < G__35039__a.length) {G__35039__a[G__35039__i] = arguments[G__35039__i + 0]; ++G__35039__i;}
  args = new cljs.core.IndexedSeq(G__35039__a,0);
} 
return G__35038__delegate.call(this,args);};
G__35038.cljs$lang$maxFixedArity = 0;
G__35038.cljs$lang$applyTo = (function (arglist__35040){
var args = cljs.core.seq(arglist__35040);
return G__35038__delegate(args);
});
G__35038.cljs$core$IFn$_invoke$arity$variadic = G__35038__delegate;
return G__35038;
})()
;

return null;
});
