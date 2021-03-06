goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15664__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15665__i = 0, G__15665__a = new Array(arguments.length -  0);
while (G__15665__i < G__15665__a.length) {G__15665__a[G__15665__i] = arguments[G__15665__i + 0]; ++G__15665__i;}
  args = new cljs.core.IndexedSeq(G__15665__a,0);
} 
return G__15664__delegate.call(this,args);};
G__15664.cljs$lang$maxFixedArity = 0;
G__15664.cljs$lang$applyTo = (function (arglist__15666){
var args = cljs.core.seq(arglist__15666);
return G__15664__delegate(args);
});
G__15664.cljs$core$IFn$_invoke$arity$variadic = G__15664__delegate;
return G__15664;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15667__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15668__i = 0, G__15668__a = new Array(arguments.length -  0);
while (G__15668__i < G__15668__a.length) {G__15668__a[G__15668__i] = arguments[G__15668__i + 0]; ++G__15668__i;}
  args = new cljs.core.IndexedSeq(G__15668__a,0);
} 
return G__15667__delegate.call(this,args);};
G__15667.cljs$lang$maxFixedArity = 0;
G__15667.cljs$lang$applyTo = (function (arglist__15669){
var args = cljs.core.seq(arglist__15669);
return G__15667__delegate(args);
});
G__15667.cljs$core$IFn$_invoke$arity$variadic = G__15667__delegate;
return G__15667;
})()
;

return null;
});
